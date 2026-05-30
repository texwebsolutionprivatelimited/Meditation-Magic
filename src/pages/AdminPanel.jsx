import { useMemo, useState } from 'react';
import {
  Check, Edit3, ImagePlus, LogOut, Plus, RefreshCcw, Save,
  Search, ShieldCheck, Trash2, Upload, X
} from 'lucide-react';
import {
  COLLECTION_LABELS,
  createSlug,
  emptyItemFor,
  getAdminAccount,
  getCollection,
  isAdminLoggedIn,
  resetCollection,
  saveAdminAccount,
  saveCollection,
  setAdminSession,
} from '../admin/contentStore';

const collections = ['courses', 'products', 'blogs'];

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
  const [account, setAccount] = useState(() => getAdminAccount());
  const [loggedIn, setLoggedIn] = useState(() => isAdminLoggedIn());
  const [authMode, setAuthMode] = useState(account ? 'login' : 'signup');
  const [authForm, setAuthForm] = useState({ email: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [activeCollection, setActiveCollection] = useState('courses');
  const [items, setItems] = useState(() => getCollection('courses'));
  const [editingItem, setEditingItem] = useState(null);
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState('');

  const filteredItems = useMemo(
    () => items.filter((item) => itemMatches(item, query)),
    [items, query]
  );

  const switchCollection = (collection) => {
    setActiveCollection(collection);
    setItems(getCollection(collection));
    setEditingItem(null);
    setQuery('');
  };

  const showNotice = (message) => {
    setNotice(message);
    setTimeout(() => setNotice(''), 2500);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setAuthError('');

    if (!authForm.email.trim() || !authForm.password.trim()) {
      setAuthError('Email aur password dono required hain.');
      return;
    }

    if (authMode === 'signup') {
      const newAccount = {
        email: authForm.email.trim().toLowerCase(),
        password: authForm.password,
      };
      saveAdminAccount(newAccount);
      setAdminSession(true);
      setAccount(newAccount);
      setLoggedIn(true);
      return;
    }

    if (!account || authForm.email.trim().toLowerCase() !== account.email || authForm.password !== account.password) {
      setAuthError('Admin email ya password galat hai.');
      return;
    }

    setAdminSession(true);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setAdminSession(false);
    setLoggedIn(false);
    setAuthForm({ email: '', password: '' });
  };

  const beginAdd = () => setEditingItem(emptyItemFor(activeCollection));
  const beginEdit = (item) => setEditingItem(structuredClone(item));

  const commitItems = (nextItems, message) => {
    setItems(nextItems);
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
    setItems(getCollection(activeCollection));
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

  const handleUpload = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => updateField('image', reader.result);
    reader.readAsDataURL(file);
  };

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
              <p className="text-xs font-semibold text-gray-500">Login / signup with admin email and password.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 bg-purple-50 rounded-2xl p-1 mb-5">
            {['login', 'signup'].map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setAuthMode(mode)}
                className={`py-3 rounded-xl text-xs font-black uppercase tracking-widest ${authMode === mode ? 'bg-[#3E0844] text-white' : 'text-[#3E0844]'}`}
              >
                {mode === 'login' ? 'Login' : 'Signup'}
              </button>
            ))}
          </div>

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-black text-[#6B1736] uppercase tracking-widest mb-1.5">Admin Email</label>
              <input
                type="email"
                value={authForm.email}
                onChange={(e) => setAuthForm((form) => ({ ...form, email: e.target.value }))}
                className="w-full rounded-2xl border border-purple-200 px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#3E0844]"
                placeholder="admin@example.com"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-[#6B1736] uppercase tracking-widest mb-1.5">Password</label>
              <input
                type="password"
                value={authForm.password}
                onChange={(e) => setAuthForm((form) => ({ ...form, password: e.target.value }))}
                className="w-full rounded-2xl border border-purple-200 px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#3E0844]"
                placeholder="Create or enter password"
              />
            </div>
            {authError && <p className="text-xs font-bold text-red-600">{authError}</p>}
            <button className="w-full bg-[#3E0844] text-white rounded-2xl py-4 font-black text-xs uppercase tracking-widest">
              {authMode === 'login' ? 'Login to Admin' : 'Create Admin Account'}
            </button>
          </form>
          <p className="text-[11px] text-gray-500 font-semibold leading-relaxed mt-5">
            Note: Yeh browser-based admin hai. Live production security ke liye backend login/database add karna best rahega.
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
              <ShieldCheck className="w-3.5 h-3.5" /> Logged in as {account?.email}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#1C0320] mt-3">Admin Content Manager</h1>
            <p className="text-sm font-semibold text-gray-600 mt-2">Courses, products, blogs add/edit/delete kar sakte hain. Image upload ya URL dono supported hain.</p>
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
            <button onClick={resetCurrentCollection} className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-xs font-black uppercase tracking-widest">
              <RefreshCcw className="w-4 h-4" /> Reset
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
                    placeholder="Search title, category, text..."
                    className="w-full rounded-2xl border border-purple-200 pl-11 pr-4 py-3 text-sm font-bold focus:outline-none focus:border-[#3E0844]"
                  />
                </div>
                <button onClick={beginAdd} className="inline-flex items-center justify-center gap-2 bg-[#3E0844] text-white rounded-2xl px-5 py-3 text-xs font-black uppercase tracking-widest">
                  <Plus className="w-4 h-4" /> Add New
                </button>
              </div>
            </div>

            {editingItem ? (
              <ContentForm
                collection={activeCollection}
                item={editingItem}
                onChange={updateField}
                onNestedChange={updateNestedField}
                onUpload={handleUpload}
                onCancel={() => setEditingItem(null)}
                onSubmit={saveItem}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map((item) => (
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
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-black text-[#6B1736] uppercase tracking-widest mb-1.5">{label}</span>
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

function ContentForm({ collection, item, onChange, onNestedChange, onUpload, onCancel, onSubmit }) {
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
        <Field label="Title">
          <TextInput value={item.title} onChange={(value) => onChange('title', value)} />
        </Field>
        <Field label="Image URL">
          <TextInput value={item.image} onChange={(value) => onChange('image', value)} placeholder="Paste image link or upload below" />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 items-start">
        <div className="rounded-2xl border border-purple-200 bg-purple-50 overflow-hidden aspect-square">
          {item.image ? <img src={item.image} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-[#3E0844]"><ImagePlus className="w-10 h-10" /></div>}
        </div>
        <Field label="Upload Image">
          <div className="rounded-2xl border border-dashed border-[#3E0844]/40 bg-purple-50/50 p-4">
            <input type="file" accept="image/*" onChange={(e) => onUpload(e.target.files?.[0])} className="block w-full text-sm font-semibold text-[#3E0844]" />
            <p className="text-[11px] font-semibold text-gray-500 mt-2 flex items-center gap-1.5"><Upload className="w-3.5 h-3.5" /> JPG/PNG upload karein. Preview turant update hoga.</p>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Field label="Slug / ID">
          <TextInput value={item.id} onChange={(value) => onChange('id', createSlug(value))} placeholder="auto-created from title" />
        </Field>
        <Field label="Category">
          <TextInput value={item.category} onChange={(value) => onChange('category', value)} />
        </Field>
        <Field label="Type">
          <select value={item.type || 'Course'} onChange={(e) => onChange('type', e.target.value)} className="w-full rounded-2xl border border-purple-200 px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#3E0844]">
            <option>Course</option>
            <option>Workshop</option>
            <option>1-to-1 Session</option>
            <option>Private Session</option>
          </select>
        </Field>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Subtitle"><TextInput value={item.subtitle} onChange={(value) => onChange('subtitle', value)} /></Field>
        <Field label="Duration / Format"><TextInput value={item.duration} onChange={(value) => onChange('duration', value)} /></Field>
      </div>
      <Field label="Short Description"><TextArea value={item.description} onChange={(value) => onChange('description', value)} /></Field>
      <Field label="Roadmap / Details"><TextArea rows={5} value={item.details} onChange={(value) => onChange('details', value)} placeholder="Step 1: ...&#10;Step 2: ..." /></Field>
      <Field label="Benefits (one per line)"><TextArea value={listToText(item.benefits)} onChange={(value) => onChange('benefits', textToList(value))} /></Field>
      <Field label="Who Can Join (one per line)"><TextArea value={listToText(item.whoCanJoin)} onChange={(value) => onChange('whoCanJoin', textToList(value))} /></Field>
      <Field label="FAQs (Question :: Answer, one per line)"><TextArea value={faqsToText(item.faqs)} onChange={(value) => onChange('faqs', textToFaqs(value))} /></Field>
    </>
  );
}

function ProductFields({ item, onChange, onNestedChange }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Field label="Product ID"><TextInput type="number" value={item.id} onChange={(value) => onChange('id', value)} /></Field>
        <Field label="Price"><TextInput type="number" value={item.price} onChange={(value) => onChange('price', value)} /></Field>
        <Field label="Badge"><TextInput value={item.badge} onChange={(value) => onChange('badge', value)} /></Field>
        <Field label="Rating"><TextInput type="number" value={item.rating} onChange={(value) => onChange('rating', value)} /></Field>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Subtitle"><TextInput value={item.subtitle} onChange={(value) => onChange('subtitle', value)} /></Field>
        <Field label="Tagline"><TextInput value={item.tagline} onChange={(value) => onChange('tagline', value)} /></Field>
      </div>
      <Field label="Description"><TextArea value={item.description} onChange={(value) => onChange('description', value)} /></Field>
      <Field label="Benefits (one per line)"><TextArea value={listToText(item.benefits)} onChange={(value) => onChange('benefits', textToList(value))} /></Field>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Material"><TextInput value={item.specifications?.material} onChange={(value) => onNestedChange('specifications', 'material', value)} /></Field>
        <Field label="Beads Size"><TextInput value={item.specifications?.beadsSize} onChange={(value) => onNestedChange('specifications', 'beadsSize', value)} /></Field>
        <Field label="Elasticity / Fit"><TextInput value={item.specifications?.elasticity} onChange={(value) => onNestedChange('specifications', 'elasticity', value)} /></Field>
        <Field label="Origin"><TextInput value={item.specifications?.origin} onChange={(value) => onNestedChange('specifications', 'origin', value)} /></Field>
      </div>
      <Field label="How To Use (one per line)"><TextArea value={listToText(item.howToUse)} onChange={(value) => onChange('howToUse', textToList(value))} /></Field>
      <Field label="Energization"><TextArea value={item.energization} onChange={(value) => onChange('energization', value)} /></Field>
    </>
  );
}

function BlogFields({ item, onChange }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Field label="Blog ID"><TextInput type="number" value={item.id} onChange={(value) => onChange('id', value)} /></Field>
        <Field label="Date"><TextInput value={item.date} onChange={(value) => onChange('date', value)} /></Field>
        <Field label="Author"><TextInput value={item.author} onChange={(value) => onChange('author', value)} /></Field>
        <Field label="Read Time"><TextInput value={item.readTime} onChange={(value) => onChange('readTime', value)} /></Field>
      </div>
      <Field label="Course / Category"><TextInput value={item.course} onChange={(value) => onChange('course', value)} /></Field>
      <Field label="Tagline"><TextInput value={item.tagline} onChange={(value) => onChange('tagline', value)} /></Field>
      <Field label="Intro"><TextArea value={item.intro} onChange={(value) => onChange('intro', value)} /></Field>
      <Field label="Quote"><TextArea value={item.quote} onChange={(value) => onChange('quote', value)} /></Field>
      <Field label="Sections (Heading :: paragraph 1 | paragraph 2, one section per line)">
        <TextArea rows={5} value={sectionsToText(item.sections)} onChange={(value) => onChange('sections', textToSections(value))} />
      </Field>
      <Field label="Technique Title"><TextInput value={item.technique?.title} onChange={(value) => onChange('technique', { ...(item.technique || {}), title: value })} /></Field>
      <Field label="Technique Steps (one per line)"><TextArea value={listToText(item.technique?.steps)} onChange={(value) => onChange('technique', { ...(item.technique || {}), steps: textToList(value) })} /></Field>
      <Field label="Conclusion"><TextArea value={item.conclusion} onChange={(value) => onChange('conclusion', value)} /></Field>
    </>
  );
}
