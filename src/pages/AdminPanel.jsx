import { useMemo, useState, useEffect } from 'react';
import {
  Check, Edit3, Eye, EyeOff, ImagePlus, LogOut, Plus, RefreshCcw, Save,
  Search, ShieldCheck, Trash2, Upload, X
} from 'lucide-react';
import {
  COLLECTION_LABELS,
  createSlug,
  emptyItemFor,
  getCollection,
  resetCollection,
  saveCollection,
  useAdminContent,
} from '../admin/contentStore';
import { auth } from '../admin/firebase';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { uploadToImageKit } from '../admin/imageKit';

const collections = ['courses', 'products', 'blogs', 'contacts'];

const listToText = (list = []) => list.join('\n');
const textToList = (text = '') => text.split('\n').map((item) => item.trim()).filter(Boolean);

const faqsToText = (faqs = []) => faqs.map((faq) => `${faq.q || ''} :: ${faq.a || ''}`).join('\n');
const textToFaqs = (text = '') => textToList(text).map((line) => {
  const [q, ...answerParts] = line.split('::');
  return { q: (q || '').trim(), a: answerParts.join('::').trim() };
}).filter((faq) => faq.q || faq.a);

const sectionsToText = (sections = []) => sections.map((section) => {
  const paragraphs = (section.paragraphs || []).join(' | ');
  return `${section.heading || ''} :: ${paragraphs}`;
}).join('\n');

const textToSections = (text = '') => textToList(text).map((line) => {
  const [heading, ...paragraphParts] = line.split('::');
  return {
    heading: (heading || '').trim(),
    paragraphs: paragraphParts.join('::').split('|').map((item) => item.trim()).filter(Boolean),
  };
}).filter((section) => section.heading || section.paragraphs.length);

const itemMatches = (item, query) => {
  if (!query.trim()) return true;
  return JSON.stringify(item).toLowerCase().includes(query.toLowerCase());
};

export default function AdminPanel() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);

  const [authForm, setAuthForm] = useState({ email: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [activeCollection, setActiveCollection] = useState('courses');
  const items = useAdminContent(activeCollection);
  const [editingItem, setEditingItem] = useState(null);
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [migrating, setMigrating] = useState(false);

  const handleMigrateLocalToFirestore = async () => {
    const ok = window.confirm('Apna saara local browser/default data (courses, products, blogs, contacts) Firestore database me store karna hai?');
    if (!ok) return;

    setMigrating(true);
    try {
      for (const coll of collections) {
        const localItems = getCollection(coll);
        await saveCollection(coll, localItems);
      }
      showNotice('Saara website data successfully Firestore me store ho gaya!');
    } catch (err) {
      console.error('Migration failed:', err);
      alert('Migration failed: ' + err.message);
    } finally {
      setMigrating(false);
    }
  };

  // Subscribe to Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.email?.toLowerCase() !== 'admin@meditationmagic.com') {
          signOut(auth);
          setCurrentUser(null);
          setLoggedIn(false);
          setAuthError('Unauthorized: Only admin@meditationmagic.com is allowed.');
        } else {
          setCurrentUser(user);
          setLoggedIn(true);
        }
      } else {
        setCurrentUser(null);
        setLoggedIn(false);
      }
      setAuthChecking(false);
    });
    return unsubscribe;
  }, []);

  const filteredItems = useMemo(
    () => items.filter((item) => itemMatches(item, query)),
    [items, query]
  );

  const switchCollection = (collection) => {
    setActiveCollection(collection);
    setEditingItem(null);
    setQuery('');
  };

  const showNotice = (message) => {
    setNotice(message);
    setTimeout(() => setNotice(''), 2500);
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);

    const email = authForm.email.trim().toLowerCase();
    const password = authForm.password;

    if (!email || !password) {
      setAuthError('Email aur password dono required hain.');
      setAuthLoading(false);
      return;
    }

    if (email !== 'admin@meditationmagic.com') {
      setAuthError('Unauthorized: Only admin@meditationmagic.com is allowed.');
      setAuthLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      showNotice('Welcome back, Admin!');
    } catch (err) {
      console.error('Auth error:', err);
      if (err.code === 'auth/email-already-in-use') {
        setAuthError('Yeh email pehle se registered hai. Login karein.');
      } else if (err.code === 'auth/weak-password') {
        setAuthError('Password kam se kam 6 characters ka hona chahiye.');
      } else if (err.code === 'auth/invalid-credential') {
        setAuthError('Email ya Password galat hai.');
      } else {
        setAuthError(err.message || 'Kuch galat ho gaya. Kripya firse try karein.');
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      showNotice('Logged out successfully.');
    } catch (err) {
      console.error('Logout error:', err);
    }
    setAuthForm({ email: '', password: '' });
  };

  const beginAdd = () => setEditingItem(emptyItemFor(activeCollection));
  const beginEdit = (item) => setEditingItem(structuredClone(item));

  const commitItems = (nextItems, message) => {
    saveCollection(activeCollection, nextItems);
    showNotice(message);
  };

  const deleteItem = (id) => {
    const ok = window.confirm('Is item ko delete karna hai?');
    if (!ok) return;
    commitItems(items.filter((item) => item.id !== id), 'Deleted successfully.');
  };

  const resetCurrentCollection = () => {
    const ok = window.confirm(`${COLLECTION_LABELS[activeCollection]} ko original data par reset karna hai?`);
    if (!ok) return;
    resetCollection(activeCollection);
    setEditingItem(null);
    showNotice('Original content restore ho gaya.');
  };

  const saveItem = (e) => {
    e.preventDefault();
    const prepared = { ...editingItem };

    if (activeCollection === 'courses') {
      prepared.id = prepared.id || createSlug(prepared.title);
    }

    const existingIndex = items.findIndex((item) => item.id === prepared.id);
    const nextItems = existingIndex >= 0
      ? items.map((item, idx) => (idx === existingIndex ? prepared : item))
      : [prepared, ...items];

    commitItems(nextItems, 'Saved successfully.');
    setEditingItem(null);
  };

  const updateField = (field, value) => {
    setEditingItem((item) => ({ ...item, [field]: value }));
  };

  const updateNestedField = (parent, field, value) => {
    setEditingItem((item) => ({
      ...item,
      [parent]: {
        ...(item[parent] || {}),
        [field]: value,
      },
    }));
  };

  const handleUpload = async (file) => {
    if (!file) return;
    setUploadingImage(true);
    try {
      const fileName = `${activeCollection}-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
      const imageUrl = await uploadToImageKit(file, fileName);
      updateField('image', imageUrl);
      showNotice('Image uploaded to ImageKit successfully!');
    } catch (error) {
      console.error('ImageKit upload error:', error);
      alert(`Image upload failed: ${error.message}`);
    } finally {
      setUploadingImage(false);
    }
  };

  // Auth checking loader
  if (authChecking) {
    return (
      <div className="min-h-screen bg-[#E2D5F3] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#3E0844] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm font-black text-[#3E0844] tracking-wide">Verifying connection to Cosmic Source...</p>
        </div>
      </div>
    );
  }

  // Not logged in screen
  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-[#E2D5F3] pt-28 pb-16 px-4 text-gray-900">
        <div className="max-w-md mx-auto bg-white rounded-3xl border-2 border-[#3E0844]/30 shadow-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#3E0844] text-white flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-black text-[#1C0320]">Admin Panel</h1>
              <p className="text-xs font-semibold text-gray-500">Secure access with admin email and password.</p>
            </div>
          </div>



          <form onSubmit={handleAuthSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-black text-[#6B1736] uppercase tracking-widest mb-1">Admin Email</label>
              <span className="block text-[11px] font-semibold text-purple-600/90 leading-tight mb-1.5">Apna login email address daalein.</span>
              <input
                type="email"
                required
                value={authForm.email}
                onChange={(e) => setAuthForm((form) => ({ ...form, email: e.target.value }))}
                className="w-full rounded-2xl border border-purple-200 px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#3E0844]"
                placeholder="admin@example.com"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-[#6B1736] uppercase tracking-widest mb-1">Password</label>
              <span className="block text-[11px] font-semibold text-purple-600/90 leading-tight mb-1.5">Apna admin password daalein (kam se kam 6 characters).</span>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={authForm.password}
                  onChange={(e) => setAuthForm((form) => ({ ...form, password: e.target.value }))}
                  className="w-full rounded-2xl border border-purple-200 px-4 py-3 pr-11 text-sm font-bold focus:outline-none focus:border-[#3E0844]"
                  placeholder="Password yahan daalein..."
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3E0844]/50 hover:text-[#3E0844] transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            {authError && <p className="text-xs font-bold text-red-600">{authError}</p>}
            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-[#3E0844] text-white rounded-2xl py-4 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              {authLoading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                'Login to Admin'
              )}
            </button>
          </form>
          <p className="text-[11px] text-gray-500 font-semibold leading-relaxed mt-5">
            Note: This admin dashboard is now secured by enterprise-grade **Firebase Authentication** and all assets are managed securely in the cloud.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E2D5F3] pt-24 lg:pt-28 pb-16 text-gray-900">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#6B1736] bg-white/70 border border-purple-200 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" /> Logged in as {currentUser?.email}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#1C0320] mt-3">Admin Content Manager</h1>
            <p className="text-sm font-semibold text-gray-600 mt-2">Courses, products, blogs add/edit/delete kar sakte hain. Image upload directly to ImageKit cloud CDN.</p>
          </div>
          <button onClick={handleLogout} className="inline-flex items-center justify-center gap-2 bg-white border border-purple-200 text-[#3E0844] rounded-2xl px-5 py-3 text-xs font-black uppercase tracking-widest">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>

        {notice && (
          <div className="mb-5 flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-2xl px-4 py-3 text-xs font-black">
            <Check className="w-4 h-4" /> {notice}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3 bg-white rounded-3xl border-2 border-[#3E0844]/20 shadow-xl p-4 h-fit">
            <div className="space-y-2">
              {collections.map((collection) => (
                <button
                  key={collection}
                  onClick={() => switchCollection(collection)}
                  className={`w-full text-left rounded-2xl px-4 py-4 text-sm font-black transition-all ${activeCollection === collection ? 'bg-[#3E0844] text-white' : 'bg-purple-50 text-[#3E0844] hover:bg-purple-100'}`}
                >
                  {COLLECTION_LABELS[collection]}
                </button>
              ))}
            </div>
            {activeCollection !== 'contacts' && (
              <button onClick={resetCurrentCollection} className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-xs font-black uppercase tracking-widest">
                <RefreshCcw className="w-4 h-4" /> Reset
              </button>
            )}
            <button
              onClick={handleMigrateLocalToFirestore}
              disabled={migrating}
              className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100 px-4 py-3 text-xs font-black uppercase tracking-widest disabled:opacity-50 transition-colors"
            >
              {migrating ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-amber-800 border-t-transparent rounded-full animate-spin"></span>
                  Syncing to Cloud...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" /> Sync Local to Cloud
                </>
              )}
            </button>
          </aside>

          <main className="lg:col-span-9 space-y-6">
            <div className="bg-white rounded-3xl border-2 border-[#3E0844]/20 shadow-xl p-4 sm:p-5">
              <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Jaise: Title, Category ya Subtitle likh kar search karein..."
                    className="w-full rounded-2xl border border-purple-200 pl-11 pr-4 py-3 text-sm font-bold focus:outline-none focus:border-[#3E0844]"
                  />
                </div>
                {activeCollection !== 'contacts' && (
                  <button onClick={beginAdd} className="inline-flex items-center justify-center gap-2 bg-[#3E0844] text-white rounded-2xl px-5 py-3 text-xs font-black uppercase tracking-widest">
                    <Plus className="w-4 h-4" /> Add New
                  </button>
                )}
              </div>
            </div>

            {activeCollection === 'contacts' ? (
              <div className="space-y-4">
                {filteredItems.length === 0 ? (
                  <div className="bg-white rounded-3xl border-2 border-[#3E0844]/20 shadow-lg p-8 text-center text-gray-500 font-semibold">
                    No queries received yet.
                  </div>
                ) : (
                  filteredItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-3xl border-2 border-[#3E0844]/20 shadow-lg p-5 sm:p-6 relative overflow-hidden text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-100 pb-3 mb-4">
                        <div>
                          <h3 className="font-serif text-lg font-black text-[#1C0320]">{item.name}</h3>
                          <p className="text-[10px] font-black text-[#6B1736] uppercase tracking-widest mt-0.5">{item.date}</p>
                        </div>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="self-start sm:self-center inline-flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl px-3 py-2 text-[10px] font-black uppercase tracking-widest border border-red-100 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Delete
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold mb-4 text-gray-600">
                        <div>
                          <span className="block text-[9px] font-black uppercase text-gray-400 tracking-wider">Email Address</span>
                          <a href={`mailto:${item.email}`} className="text-[#3E0844] hover:underline font-extrabold">{item.email}</a>
                        </div>
                        <div>
                          <span className="block text-[9px] font-black uppercase text-gray-400 tracking-wider">Phone / WhatsApp</span>
                          <a href={`https://wa.me/${item.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-extrabold">{item.phone}</a>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="block text-[9px] font-black uppercase text-gray-400 tracking-wider">Selected Modality / Program</span>
                          <span className="text-[#1C0320] font-black bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-100/60 inline-block mt-1">{item.program}</span>
                        </div>
                      </div>
                      <div>
                        <span className="block text-[9px] font-black uppercase text-gray-400 tracking-wider mb-1">Message / Request</span>
                        <p className="text-xs text-gray-700 bg-purple-50/20 p-4 rounded-2xl border border-purple-100/40 leading-relaxed font-semibold">{item.message}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : editingItem ? (
              <ContentForm
                collection={activeCollection}
                item={editingItem}
                onChange={updateField}
                onNestedChange={updateNestedField}
                onUpload={handleUpload}
                uploading={uploadingImage}
                onCancel={() => setEditingItem(null)}
                onSubmit={saveItem}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.length === 0 ? (
                  <div className="col-span-2 bg-white rounded-3xl border-2 border-[#3E0844]/20 shadow-lg p-8 text-center text-gray-500 font-semibold">
                    No items found in this collection.
                  </div>
                ) : (
                  filteredItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-3xl border-2 border-[#3E0844]/20 shadow-lg p-4 flex gap-4">
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="w-24 h-24 rounded-2xl object-cover bg-purple-50 border border-purple-100 flex-shrink-0" />
                      ) : (
                        <div className="w-24 h-24 rounded-2xl bg-purple-50 border border-purple-100 flex-shrink-0 flex items-center justify-center text-[#3E0844]">
                          <ImagePlus className="w-8 h-8" />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-black text-[#6B1736] uppercase tracking-widest mb-1">{item.type || item.course || item.badge || COLLECTION_LABELS[activeCollection]}</p>
                        <h3 className="font-serif font-black text-[#1C0320] leading-snug line-clamp-2">{item.title || 'Untitled'}</h3>
                        <p className="text-xs font-semibold text-gray-500 line-clamp-2 mt-1">{item.description || item.intro || item.subtitle}</p>
                        <div className="flex gap-2 mt-4">
                          <button onClick={() => beginEdit(item)} className="inline-flex items-center gap-1.5 bg-purple-50 text-[#3E0844] rounded-xl px-3 py-2 text-[10px] font-black uppercase tracking-widest">
                            <Edit3 className="w-3.5 h-3.5" /> Edit
                          </button>
                          <button onClick={() => deleteItem(item.id)} className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 rounded-xl px-3 py-2 text-[10px] font-black uppercase tracking-widest">
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function Field({ label, help, children }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-black text-[#6B1736] uppercase tracking-widest mb-1">{label}</span>
      {help && <span className="block text-[11px] font-semibold text-purple-600/90 leading-tight mb-1.5">{help}</span>}
      {children}
    </label>
  );
}

function TextInput({ value, onChange, type = 'text', placeholder = '' }) {
  return (
    <input
      type={type}
      value={value || ''}
      onChange={(e) => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-purple-200 px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#3E0844]"
    />
  );
}

function TextArea({ value, onChange, rows = 4, placeholder = '' }) {
  return (
    <textarea
      value={value || ''}
      rows={rows}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-purple-200 px-4 py-3 text-sm font-semibold leading-relaxed focus:outline-none focus:border-[#3E0844]"
    />
  );
}

function ContentForm({ collection, item, onChange, onNestedChange, onUpload, uploading, onCancel, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-3xl border-2 border-[#3E0844]/20 shadow-xl p-4 sm:p-6 space-y-5">
      <div className="flex items-center justify-between gap-3 border-b border-purple-100 pb-4">
        <div>
          <h2 className="font-serif text-2xl font-black text-[#1C0320]">Edit {COLLECTION_LABELS[collection]}</h2>
          <p className="text-xs font-semibold text-gray-500">Fields fill karke save karein. Multi-line boxes me har line ek item hai.</p>
        </div>
        <button type="button" onClick={onCancel} className="p-3 rounded-2xl bg-purple-50 text-[#3E0844]">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Title" help="Aisa name jo website par sabhi logo ko dikhega. Clear aur short rakhein.">
          <TextInput value={item.title} onChange={(value) => onChange('title', value)} placeholder="Jaise: 7-Chakra Healing Bracelet ya Advanced Meditation Workshop" />
        </Field>
        <Field label="Image URL" help="Online image ka full link paste karein ya fir niche button se photo upload karein.">
          <TextInput value={item.image} onChange={(value) => onChange('image', value)} placeholder="Jaise: https://images.unsplash.com/... (ya fir niche upload button use karein)" />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 items-start">
        <div className="rounded-2xl border border-purple-200 bg-purple-50 overflow-hidden aspect-square flex items-center justify-center">
          {item.image ? <img src={item.image} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-[#3E0844]"><ImagePlus className="w-10 h-10" /></div>}
        </div>
        <Field label="Upload Image" help="Computer ya mobile gallery se photo directly upload karne ke liye file select karein.">
          <div className="rounded-2xl border border-dashed border-[#3E0844]/40 bg-purple-50/50 p-4 min-h-[110px] flex flex-col justify-center">
            {uploading ? (
              <div className="flex flex-col items-center justify-center py-2 animate-pulse-slow">
                <div className="w-6 h-6 border-3 border-[#3E0844] border-t-transparent rounded-full animate-spin mb-2"></div>
                <p className="text-xs font-black text-[#3E0844]">Uploading to ImageKit Cloud...</p>
              </div>
            ) : (
              <>
                <input type="file" accept="image/*" onChange={(e) => onUpload(e.target.files?.[0])} className="block w-full text-sm font-semibold text-[#3E0844]" />
                <p className="text-[11px] font-semibold text-gray-500 mt-2 flex items-center gap-1.5"><Upload className="w-3.5 h-3.5" /> JPG/PNG upload karein. Preview turant upar dikhega.</p>
              </>
            )}
          </div>
        </Field>
      </div>

      {collection === 'courses' && (
        <CourseFields item={item} onChange={onChange} />
      )}

      {collection === 'products' && (
        <ProductFields item={item} onChange={onChange} onNestedChange={onNestedChange} />
      )}

      {collection === 'blogs' && (
        <BlogFields item={item} onChange={onChange} />
      )}

      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-purple-100">
        <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#3E0844] text-white rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest">
          <Save className="w-4 h-4" /> Save Changes
        </button>
        <button type="button" onClick={onCancel} className="inline-flex items-center justify-center gap-2 bg-purple-50 text-[#3E0844] rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest">
          Cancel
        </button>
      </div>
    </form>
  );
}

function CourseFields({ item, onChange }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Category" help="Workshop/Course kis category me hai (Jaise: Meditation, Healing).">
          <TextInput value={item.category} onChange={(value) => onChange('category', value)} placeholder="Jaise: Meditation, Energy Healing, Chakra Activation" />
        </Field>
        <Field label="Type" help="Program ka type chuneein (Course, Workshop, ya 1-to-1 Personal Session).">
          <select value={item.type || 'Course'} onChange={(e) => onChange('type', e.target.value)} className="w-full rounded-2xl border border-purple-200 px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#3E0844]">
            <option>Course</option>
            <option>Workshop</option>
            <option>1-to-1 Session</option>
            <option>Private Session</option>
          </select>
        </Field>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Subtitle" help="Title ke niche aane wala 1 line ka short/catchy statement.">
          <TextInput value={item.subtitle} onChange={(value) => onChange('subtitle', value)} placeholder="Jaise: Kundalini shakti ko jagrut karne ka sabse asan tareeka" />
        </Field>
        <Field label="Duration / Format" help="Kitne din chalega aur session live hoga ya recording milegi.">
          <TextInput value={item.duration} onChange={(value) => onChange('duration', value)} placeholder="Jaise: 3 Days (2 hours/day) on Zoom, 1-Hour Live Video Call" />
        </Field>
      </div>
      <Field label="Short Description" help="Card par aur details page ke shuruat me dikhne wala short details paragraph.">
        <TextArea value={item.description} onChange={(value) => onChange('description', value)} placeholder="Is program me hum dhyan aur chakra activation ke scientific aur spiritual tareeke seekhenge..." />
      </Field>
      <Field label="Roadmap / Details" help="Pure program ka schedule ya steps. Har line me ek new step likhein (Enter daba kar).">
        <TextArea rows={5} value={item.details} onChange={(value) => onChange('details', value)} placeholder="Day 1: Basic Breathing and Grounding Meditation&#10;Day 2: Connecting with your Heart and Solar Plexus Chakras&#10;Day 3: Attaining deep peace and Third-Eye Activation" />
      </Field>
      <Field label="Benefits (one per line)" help="Yeh course karne se kya fayde honge? Har line me 1 fayda likhein (Enter daba kar).">
        <TextArea value={listToText(item.benefits)} onChange={(value) => onChange('benefits', textToList(value))} placeholder="Mental stress aur anxiety bilkul khatam ho jayegi&#10;Inner self se gehra connection feel hoga&#10;Daily life me focus aur energy level improve hoga" />
      </Field>
      <Field label="Who Can Join (one per line)" help="Yeh kis kis ke liye upyogi hai? Har line me ek point likhein (Enter daba kar).">
        <TextArea value={listToText(item.whoCanJoin)} onChange={(value) => onChange('whoCanJoin', textToList(value))} placeholder="Naye log jo meditation seekhna chahte hain&#10;Vo log jo stress aur depression se pareshan hain&#10;Professionals jo mind ko fresh rakhna chahte hain" />
      </Field>
      <Field label="FAQs (Question :: Answer, one per line)" help="Aapke aur clients ke Sawal-Jawab. Sawal ke baad ' :: ' (double-colon) lagayein fir jawab likhein. Har line me 1 sawaal-jawab likhein.">
        <TextArea value={faqsToText(item.faqs)} onChange={(value) => onChange('faqs', textToFaqs(value))} placeholder="Kya sessions recorded honge? :: Haan, sabhi sessions ki recordings aapko lifetime access ke sath milegi.&#10;Kya naye log seekh sakte hain? :: Bilkul! Yeh course zero level se advanced level tak design kiya gaya hai." />
      </Field>
    </>
  );
}

function ProductFields({ item, onChange, onNestedChange }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Field label="Price" help="Product ka price (sirf simple numbers likhein, currency symbol Rs/₹ ya comma na lagayein).">
          <TextInput type="number" value={item.price} onChange={(value) => onChange('price', value)} placeholder="Jaise: 1199 (Rs. ya comma nahi)" />
        </Field>
        <Field label="Badge" help="Product ke photo ke upar aane wala tag (Jaise: Best Seller, New Arrival, 20% OFF).">
          <TextInput value={item.badge} onChange={(value) => onChange('badge', value)} placeholder="Jaise: Best Seller, Natural, Limited Stock" />
        </Field>
        <Field label="Rating" help="Star rating jo product par dikhegi (1 se lekar 5 tak ka number).">
          <TextInput type="number" value={item.rating} onChange={(value) => onChange('rating', value)} placeholder="Jaise: 4.8, 5.0" />
        </Field>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Subtitle" help="Naam ke niche aane wala sub-title (Jaise: 100% Genuine Healing Crystals).">
          <TextInput value={item.subtitle} onChange={(value) => onChange('subtitle', value)} placeholder="Jaise: Pure Natural Crystal Bead Bracelet" />
        </Field>
        <Field label="Tagline" help="Product detail page par aane wala bada aur aakarshak short slogan.">
          <TextInput value={item.tagline} onChange={(value) => onChange('tagline', value)} placeholder="Jaise: Apne aaspas ki negative energy ko positive vibration me badlein" />
        </Field>
      </div>
      <Field label="Description" help="Product ke baare me saari details (iski power, look, details) jo page par dikhegi.">
        <TextArea value={item.description} onChange={(value) => onChange('description', value)} placeholder="Yeh Amethyst bracelet pure aur certified natural stone se bana hai jo aapke mind ko shanti deta hai..." />
      </Field>
      <Field label="Benefits (one per line)" help="Product use karne ke kya fayde hain? Har line me 1 fayda likhein (Enter daba kar).">
        <TextArea value={listToText(item.benefits)} onChange={(value) => onChange('benefits', textToList(value))} placeholder="Positive energy ko attract karta hai&#10;Focus aur memory power ko boost karta hai&#10;Aaspas ki negative vibes se protect karta hai" />
      </Field>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Material" help="Kis metal/stone se bana hai.">
          <TextInput value={item.specifications?.material} onChange={(value) => onNestedChange('specifications', 'material', value)} placeholder="Jaise: Natural Crystal Stone, Copper Wire" />
        </Field>
        <Field label="Beads Size" help="Beads ka size millimeters me.">
          <TextInput value={item.specifications?.beadsSize} onChange={(value) => onNestedChange('specifications', 'beadsSize', value)} placeholder="Jaise: 8mm, 10mm" />
        </Field>
        <Field label="Elasticity / Fit" help="Hath me kaisa fit hota hai uski details.">
          <TextInput value={item.specifications?.elasticity} onChange={(value) => onNestedChange('specifications', 'elasticity', value)} placeholder="Jaise: High Quality Elastic (Fits all sizes)" />
        </Field>
        <Field label="Origin" help="Yeh crystal kis country/region ka hai.">
          <TextInput value={item.specifications?.origin} onChange={(value) => onNestedChange('specifications', 'origin', value)} placeholder="Jaise: India, Brazil, Madagascar" />
        </Field>
      </div>
      <Field label="How To Use (one per line)" help="Product ko sahi tarike se pehne/use karne ke steps. Har line me 1 step likhein (Enter daba kar).">
        <TextArea value={listToText(item.howToUse)} onChange={(value) => onChange('howToUse', textToList(value))} placeholder="Subah snaan karne ke baad right hand me pehnein&#10;Meditation karte waqt bracelet ko dhyan me rakhein&#10;Hafte me ek baar crystal ko normal paani se clean karein" />
      </Field>
      <Field label="Energization" help="Hum product ko kaise charge aur pure karke bhejte hain uski puri process.">
        <TextArea value={item.energization} onChange={(value) => onChange('energization', value)} placeholder="Hum har crystal product ko mantra jaap aur pure Ganga jal se purify karke aap tak bhejte hain..." />
      </Field>
      <Field label="FAQs (Question :: Answer, one per line)" help="Product ke related aksar puche jaane wale Sawal aur Jawab. Sawaal ke baad ' :: ' (double-colon) lagayein, fir jawab likhein.">
        <TextArea value={faqsToText(item.faqs)} onChange={(value) => onChange('faqs', textToFaqs(value))} placeholder="Kya ye 100% natural crystal hai? :: Haan, hum lab-certified pure natural crystals hi provide karte hain.&#10;Kya ye tut sakta hai? :: Isme ultra-durable premium elastic use kiya gaya hai, par dhyan se use karein." />
      </Field>
    </>
  );
}

function BlogFields({ item, onChange }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Field label="Date" help="Kis tarikh ko blog publish hua.">
          <TextInput value={item.date} onChange={(value) => onChange('date', value)} placeholder="Jaise: May 30, 2026" />
        </Field>
        <Field label="Author" help="Blog likhne wale ka naam.">
          <TextInput value={item.author} onChange={(value) => onChange('author', value)} placeholder="Jaise: Acharya Neha, Dr. Sharma" />
        </Field>
        <Field label="Read Time" help="Padhne me kitna time lagega.">
          <TextInput value={item.readTime} onChange={(value) => onChange('readTime', value)} placeholder="Jaise: 5 mins read" />
        </Field>
      </div>
      <Field label="Course / Category" help="Blog kis topic/subject par aadharit hai.">
        <TextInput value={item.course} onChange={(value) => onChange('course', value)} placeholder="Jaise: Meditation Guide, Sound Healing, Crystal Power" />
      </Field>
      <Field label="Tagline" help="Blog details page par dikhne wala bada aur beautiful headline/slogan.">
        <TextInput value={item.tagline} onChange={(value) => onChange('tagline', value)} placeholder="Jaise: Shanti aur sukoon bhari zindagi ki shuruat dhyan se karein" />
      </Field>
      <Field label="Intro" help="Blog ka pehla shuruati paragraph jo user ko blog padhne ke liye aakarshit karega.">
        <TextArea value={item.intro} onChange={(value) => onChange('intro', value)} placeholder="Aaj ki bhaag-daud bhari life me hum apne andar ki shanti ko bhool chuke hain. Meditation hi vo rasta hai jo..." />
      </Field>
      <Field label="Quote" help="Blog ke beech me aane wala chhota spiritual ya powerful vichaar (optional).">
        <TextArea value={item.quote} onChange={(value) => onChange('quote', value)} placeholder="Jaise: 'Apne andar ke shanti ko dhoondhna hi sabse bada chamatkar hai.'" />
      </Field>
      <Field label="Sections (Heading :: paragraph 1 | paragraph 2, one section per line)" help="Blog ke main points aur content. Heading ke baad ' :: ' (double-colon) lagayein, fir text likhein. Agar us heading me dusra paragraph ho to pipeline ' | ' lagayein. Har section alag line me likhein.">
        <TextArea rows={5} value={sectionsToText(item.sections)} onChange={(value) => onChange('sections', textToSections(value))} placeholder="1. Sahi aasan kaise chunein? :: Humesha aaramdaayak aur seedhe baithne wale aasan ko chunein. | Grounding mat ka use karna best hota hai.&#10;2. Saas par focus kaise karein? :: Har aati-jaati saas ko normal speed me feel karein." />
      </Field>
      <Field label="Technique Title" help="Blog me batayi gayi kisi dhyan kriya/exercise ka naam.">
        <TextInput value={item.technique?.title} onChange={(value) => onChange('technique', { ...(item.technique || {}), title: value })} placeholder="Jaise: 5-Step Deep Breathing Practice" />
      </Field>
      <Field label="Technique Steps (one per line)" help="Meditation technique ko karne ke simple steps. Har line me 1 step likhein (Enter daba kar).">
        <TextArea value={listToText(item.technique?.steps)} onChange={(value) => onChange('technique', { ...(item.technique || {}), steps: textToList(value) })} placeholder="Ek aaramdaayak aasan me baith jayein.&#10;Aankhein band karke dhyan dono eyebrows ke beech lagayein.&#10;Gehri aur lambi saas lein aur chodein." />
      </Field>
      <Field label="Conclusion" help="Blog ka aakhiri nishkarsh ya closing paragraph.">
        <TextArea value={item.conclusion} onChange={(value) => onChange('conclusion', value)} placeholder="Hume aasha hai ki ye simple guide aapko dhyan lagane me madad karegi. Shanti aur sukoon aapke sath rahe!" />
      </Field>
    </>
  );
}
