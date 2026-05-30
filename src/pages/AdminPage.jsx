import React, { useState, useEffect } from 'react';
import {
  PRODUCTS_DATA, saveProductsData
} from '../data/products';
import {
  WORKSHOPS_DATA, saveWorkshopsData, CATEGORIES
} from '../data/workshops';
import {
  BLOGS_DATA, saveBlogsData
} from '../data/blogs';
import {
  Sparkles, Lock, User, Plus, Trash2, LogOut, Check,
  Image as ImageIcon, BookOpen, Gem, FileText, Calendar, PlusCircle, MinusCircle
} from 'lucide-react';

export default function AdminPage() {
  // Auth states
  const [credentials, setCredentials] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUsername, setAuthUsername] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Dashboard tab state
  const [activeTab, setActiveTab] = useState('products');

  // Loaded items states
  const [products, setProducts] = useState([]);
  const [courses, setCourses] = useState([]);
  const [blogs, setBlogs] = useState([]);

  // Form states
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);

  // Dynamic Add Form States
  // 1. Add Product Form
  const [prodTitle, setProdTitle] = useState('');
  const [prodPrice, setProdPrice] = useState('');
  const [prodTagline, setProdTagline] = useState('');
  const [prodSubtitle, setProdSubtitle] = useState('');
  const [prodDescription, setProdDescription] = useState('');
  const [prodBenefits, setProdBenefits] = useState(['', '']);
  const [prodMaterial, setProdMaterial] = useState('Natural Healing Crystals');
  const [prodBeadSize, setProdBeadSize] = useState('8mm standard beads');
  const [prodElasticity, setProdElasticity] = useState('Stretchable cord (One size fits all)');
  const [prodOrigin, setProdOrigin] = useState('Ethically sourced natural mines');
  const [prodHowToUse, setProdHowToUse] = useState(['Wear it on your left hand.', 'Set your intention daily.']);
  const [prodEnergization, setProdEnergization] = useState('Blessed personally by Neelam Arora');

  // 2. Add Course Form
  const [courseTitle, setCourseTitle] = useState('');
  const [courseSubtitle, setCourseSubtitle] = useState('');
  const [courseCategory, setCourseCategory] = useState('Money & Success');
  const [courseDuration, setCourseDuration] = useState('2 Hours Live Session');
  const [courseType, setCourseType] = useState('Workshop');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseDetails, setCourseDetails] = useState('');
  const [courseBenefits, setCourseBenefits] = useState(['', '']);
  const [courseWhoCanJoin, setCourseWhoCanJoin] = useState(['', '']);
  const [courseWhyChoose, setCourseWhyChoose] = useState('');
  const [courseFaqs, setCourseFaqs] = useState([{ q: 'Will I learn details?', a: 'Yes, fully guided.' }]);

  // 3. Add Blog Form
  const [blogTitle, setBlogTitle] = useState('');
  const [blogTagline, setBlogTagline] = useState('');
  const [blogCourse, setBlogCourse] = useState('General Healing');
  const [blogIntro, setBlogIntro] = useState('');
  const [blogQuote, setBlogQuote] = useState('');
  const [blogConclusion, setBlogConclusion] = useState('');
  const [blogSections, setBlogSections] = useState([
    { heading: 'Healing Core', paragraphs: [''] }
  ]);
  const [blogTechTitle, setBlogTechTitle] = useState('Simple Healing Practice');
  const [blogTechSteps, setBlogTechSteps] = useState(['']);

  // Load credentials & item data
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const creds = localStorage.getItem('mm_admin_credentials');
      if (creds) {
        setCredentials(JSON.parse(creds));
      }
      
      const logged = localStorage.getItem('mm_admin_logged');
      if (logged === 'true') {
        setIsLoggedIn(true);
      }
    }
    // Load local storage updated data
    setProducts(PRODUCTS_DATA);
    setCourses(WORKSHOPS_DATA);
    setBlogs(BLOGS_DATA);
  }, []);

  // Handle first-time Signup / credential registration
  const handleRegisterCredentials = (e) => {
    e.preventDefault();
    if (!authUsername.trim() || !authPassword.trim()) {
      setAuthError('Please fill in both fields.');
      return;
    }
    const creds = { username: authUsername.trim(), password: authPassword.trim() };
    localStorage.setItem('mm_admin_credentials', JSON.stringify(creds));
    localStorage.setItem('mm_admin_logged', 'true');
    setCredentials(creds);
    setIsLoggedIn(true);
    setAuthUsername('');
    setAuthPassword('');
    setAuthError('');
  };

  // Handle admin Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (!credentials) return;
    if (
      authUsername.trim() === credentials.username &&
      authPassword.trim() === credentials.password
    ) {
      localStorage.setItem('mm_admin_logged', 'true');
      setIsLoggedIn(true);
      setAuthUsername('');
      setAuthPassword('');
      setAuthError('');
    } else {
      setAuthError('Invalid username or password.');
    }
  };

  // Handle Log out
  const handleLogout = () => {
    localStorage.removeItem('mm_admin_logged');
    setIsLoggedIn(false);
  };

  // Helper: Read file as Base64 string
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Process selected file
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await getBase64(file);
        setImageUrl(base64);
        setImageFile(file.name);
      } catch (err) {
        alert('Failed to process image file. Please try another file.');
      }
    }
  };

  // ➕ Add New Product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!prodTitle.trim() || !prodPrice || !prodDescription.trim() || !imageUrl) {
      alert('Please fill in all primary fields (Title, Price, Description, and Image).');
      return;
    }

    const newProduct = {
      id: Date.now(),
      title: prodTitle.trim(),
      price: Number(prodPrice),
      rating: 5,
      badge: 'Blessed',
      badgeColor: 'bg-[#FFD95A] text-[#3E0844]',
      tagline: prodTagline.trim() || 'Peace · Abundance · Shield',
      accent: 'from-[#a78bfa] to-[#7c3aed]',
      image: imageUrl,
      subtitle: prodSubtitle.trim() || 'Energized Life Alignment Bracelet',
      description: prodDescription.trim(),
      benefits: prodBenefits.filter(b => b.trim() !== ''),
      specifications: {
        material: prodMaterial.trim(),
        beadsSize: prodBeadSize.trim(),
        elasticity: prodElasticity.trim(),
        origin: prodOrigin.trim()
      },
      howToUse: prodHowToUse.filter(h => h.trim() !== ''),
      energization: prodEnergization.trim()
    };

    const updated = [...products, newProduct];
    saveProductsData(updated);
    setProducts(updated);
    
    // Clear Form
    setProdTitle('');
    setProdPrice('');
    setProdTagline('');
    setProdSubtitle('');
    setProdDescription('');
    setProdBenefits(['', '']);
    setImageUrl('');
    setImageFile(null);

    alert('Product uploaded successfully!');
    window.location.reload(); // Refresh to sync dynamic data globally
  };

  // ➕ Add New Course/Workshop
  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!courseTitle.trim() || !courseDescription.trim() || !imageUrl) {
      alert('Please fill in Title, Description, and Image.');
      return;
    }

    // Slugify title
    const idSlug = courseTitle.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || Date.now().toString();

    const newCourse = {
      id: idSlug,
      title: courseTitle.trim(),
      subtitle: courseSubtitle.trim() || 'Attract Abundance & Joy',
      category: courseCategory,
      duration: courseDuration.trim(),
      type: courseType,
      description: courseDescription.trim(),
      details: courseDetails.trim() || 'Guided step-by-step practices.',
      benefits: courseBenefits.filter(b => b.trim() !== ''),
      whoCanJoin: courseWhoCanJoin.filter(w => w.trim() !== ''),
      whyChoose: courseWhyChoose.trim() || 'Highly effective, simple guidance.',
      faqs: courseFaqs.filter(f => f.q.trim() !== ''),
      image: imageUrl
    };

    const updated = [...courses, newCourse];
    saveWorkshopsData(updated);
    setCourses(updated);

    // Clear form
    setCourseTitle('');
    setCourseSubtitle('');
    setCourseDescription('');
    setCourseDetails('');
    setCourseBenefits(['', '']);
    setCourseWhoCanJoin(['', '']);
    setCourseWhyChoose('');
    setCourseFaqs([{ q: 'Will I learn details?', a: 'Yes, fully guided.' }]);
    setImageUrl('');
    setImageFile(null);

    alert('Course/Workshop uploaded successfully!');
    window.location.reload();
  };

  // ➕ Add New Blog
  const handleAddBlog = (e) => {
    e.preventDefault();
    if (!blogTitle.trim() || !blogIntro.trim() || !imageUrl) {
      alert('Please fill in Title, Introduction, and Image.');
      return;
    }

    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    const newBlog = {
      id: Date.now(),
      title: blogTitle.trim(),
      date: dateStr,
      image: imageUrl,
      course: blogCourse.trim() || 'General Abundance',
      tagline: blogTagline.trim() || 'Practical guides for happy life goals.',
      author: 'Neelam Arora',
      readTime: '5 mins read',
      intro: blogIntro.trim(),
      quote: blogQuote.trim() || 'Positive intentions create real pathways.',
      sections: blogSections.filter(s => s.heading.trim() !== ''),
      technique: {
        title: blogTechTitle.trim(),
        steps: blogTechSteps.filter(t => t.trim() !== '')
      },
      conclusion: blogConclusion.trim() || 'Keep your mind focused, speak happy words, and step into success.'
    };

    const updated = [...blogs, newBlog];
    saveBlogsData(updated);
    setBlogs(updated);

    // Clear Form
    setBlogTitle('');
    setBlogTagline('');
    setBlogIntro('');
    setBlogQuote('');
    setBlogConclusion('');
    setBlogSections([{ heading: 'Healing Core', paragraphs: [''] }]);
    setBlogTechTitle('Simple Healing Practice');
    setBlogTechSteps(['']);
    setImageUrl('');
    setImageFile(null);

    alert('Blog post published successfully!');
    window.location.reload();
  };

  // 🗑️ Delete Product
  const handleDeleteProduct = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const updated = products.filter(p => p.id !== id);
      saveProductsData(updated);
      setProducts(updated);
      alert('Product deleted successfully!');
      window.location.reload();
    }
  };

  // 🗑️ Delete Course
  const handleDeleteCourse = (id) => {
    if (confirm('Are you sure you want to delete this course?')) {
      const updated = courses.filter(c => c.id !== id);
      saveWorkshopsData(updated);
      setCourses(updated);
      alert('Course deleted successfully!');
      window.location.reload();
    }
  };

  // 🗑️ Delete Blog
  const handleDeleteBlog = (id) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      const updated = blogs.filter(b => b.id !== id);
      saveBlogsData(updated);
      setBlogs(updated);
      alert('Blog deleted successfully!');
      window.location.reload();
    }
  };

  // Form List Helpers
  const addListField = (state, setState) => {
    setState([...state, '']);
  };

  const removeListField = (index, state, setState) => {
    if (state.length <= 1) return;
    setState(state.filter((_, i) => i !== index));
  };

  const updateListField = (index, val, state, setState) => {
    const updated = state.map((item, i) => i === index ? val : item);
    setState(updated);
  };

  // Blog dynamic section fields helpers
  const updateBlogSectionHeading = (index, heading) => {
    const updated = blogSections.map((sec, i) => i === index ? { ...sec, heading } : sec);
    setBlogSections(updated);
  };

  const updateBlogSectionParagraph = (secIdx, pIdx, val) => {
    const updated = blogSections.map((sec, i) => {
      if (i === secIdx) {
        const updatedParas = sec.paragraphs.map((p, k) => k === pIdx ? val : p);
        return { ...sec, paragraphs: updatedParas };
      }
      return sec;
    });
    setBlogSections(updated);
  };

  const addBlogSectionPara = (secIdx) => {
    const updated = blogSections.map((sec, i) => {
      if (i === secIdx) {
        return { ...sec, paragraphs: [...sec.paragraphs, ''] };
      }
      return sec;
    });
    setBlogSections(updated);
  };

  return (
    <div className="pt-20 lg:pt-28 pb-20 min-h-screen bg-[#E2D5F3] relative overflow-hidden text-gray-900">
      {/* 🌌 Atmospheric glows */}
      <div className="absolute top-[5%] left-[-10%] w-[45%] h-[45%] rounded-full bg-white/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-purple-100/40 blur-[130px] pointer-events-none" />

      {/* -------------------- STATE A: AUTHENTICATION PANEL -------------------- */}
      {!isLoggedIn && (
        <section className="relative z-10 max-w-md mx-auto px-4 pt-10">
          <div className="bg-white/80 backdrop-blur-md rounded-[1.75rem] p-6 sm:p-10 border border-purple-100 shadow-2xl space-y-6 text-center">
            
            {/* Header info */}
            <div className="space-y-2">
              <span className="inline-flex items-center justify-center p-3 rounded-full bg-[#3E0844]/10 text-[#3E0844] mb-1">
                <Lock className="w-6 h-6" />
              </span>
              <h2 className="font-serif text-2xl font-black text-[#1C0320]">
                {credentials ? 'Admin Log In' : 'Setup Admin Account'}
              </h2>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                {credentials
                  ? 'Enter your credentials to manage products, courses, and blogs.'
                  : 'Establish a new administrative username and password to secure the dashboard.'}
              </p>
            </div>

            {/* Error Message */}
            {authError && (
              <div className="bg-red-50 text-red-700 text-xs font-bold p-3.5 rounded-xl border border-red-200 text-left">
                ⚠️ {authError}
              </div>
            )}

            {/* Login / Registration form */}
            <form
              onSubmit={credentials ? handleLogin : handleRegisterCredentials}
              className="space-y-4 text-left"
            >
              <div>
                <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">
                  Admin Username
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. admin"
                    value={authUsername}
                    onChange={(e) => setAuthUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-purple-100 bg-white/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">
                  Admin Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                  <input
                    type="password"
                    required
                    placeholder="Enter secure password"
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-purple-100 bg-white/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#3E0844] hover:bg-[#6B1736] text-white font-extrabold uppercase tracking-widest rounded-xl text-xs transition-colors shadow-md mt-6"
              >
                {credentials ? 'Verify & Log In' : 'Create Admin Workspace'}
              </button>
            </form>
          </div>
        </section>
      )}

      {/* -------------------- STATE B: ADMIN WORKSPACE DASHBOARD -------------------- */}
      {isLoggedIn && (
        <section className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="bg-white/85 backdrop-blur-md border border-purple-100 shadow-2xl rounded-[2rem] p-5 sm:p-8 space-y-8">
            
            {/* Header info bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-purple-100 pb-5">
              <div className="text-center sm:text-left space-y-1">
                <span className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase text-[#6B1736] tracking-widest bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Workspace Active
                </span>
                <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1C0320]">
                  Admin Dashboard
                </h1>
                <div className="flex items-center gap-3 text-[10px] text-gray-500 font-extrabold uppercase tracking-wider">
                  <span>Bracelets: {products.length}</span>
                  <span>•</span>
                  <span>Courses: {courses.length}</span>
                  <span>•</span>
                  <span>Blogs: {blogs.length}</span>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-700 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all border border-red-200"
              >
                <LogOut className="w-4 h-4" /> Log Out
              </button>
            </div>

            {/* Manage tabs */}
            <div className="flex border-b border-purple-100 pb-0.5 gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: 'products', name: 'Bracelets', icon: <Gem className="w-4 h-4" /> },
                { id: 'courses', name: 'Courses & Workshops', icon: <BookOpen className="w-4 h-4" /> },
                { id: 'blogs', name: 'Blog Posts', icon: <FileText className="w-4 h-4" /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setImageUrl('');
                    setImageFile(null);
                  }}
                  className={`flex items-center gap-2 px-5 py-3.5 border-b-2 font-black text-xs uppercase tracking-widest shrink-0 transition-all ${
                    activeTab === tab.id
                      ? 'border-[#3E0844] text-[#3E0844]'
                      : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </div>

            {/* TAB CONTENT 1: PRODUCTS / BRACELETS */}
            {activeTab === 'products' && (
              <div className="space-y-10">
                {/* 1. Add Product Form */}
                <div className="bg-purple-50/50 border border-purple-100/60 rounded-3xl p-5 sm:p-8 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#3E0844] text-white">
                      <Plus className="w-4 h-4" />
                    </span>
                    <h3 className="font-serif text-lg font-black text-[#1C0320]">
                      Add New Crystal Bracelet Product
                    </h3>
                  </div>

                  <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Bracelet Title *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Aventurine Money Bracelet"
                          value={prodTitle}
                          onChange={(e) => setProdTitle(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Price (INR) *</label>
                        <input
                          type="number"
                          required
                          placeholder="e.g. 1199"
                          value={prodPrice}
                          onChange={(e) => setProdPrice(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Tagline</label>
                        <input
                          type="text"
                          placeholder="e.g. Abundance · Protection · Growth"
                          value={prodTagline}
                          onChange={(e) => setProdTagline(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Subtitle Header</label>
                        <input
                          type="text"
                          placeholder="e.g. Divine Abundance & Wealth Magnet"
                          value={prodSubtitle}
                          onChange={(e) => setProdSubtitle(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Main Description *</label>
                        <textarea
                          required
                          rows="4"
                          placeholder="Write a simple description about the crystal benefits..."
                          value={prodDescription}
                          onChange={(e) => setProdDescription(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        ></textarea>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Image selector */}
                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Bracelet Image *</label>
                        <div className="space-y-2">
                          <input
                            type="text"
                            placeholder="Paste image URL here..."
                            value={imageUrl}
                            onChange={(e) => {
                              setImageUrl(e.target.value);
                              setImageFile(null);
                            }}
                            className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                          />
                          <div className="flex items-center justify-center p-4 border border-dashed border-purple-200 bg-white/40 rounded-xl">
                            <label className="cursor-pointer flex flex-col items-center gap-1.5 text-xs text-purple-700 font-bold hover:text-[#3E0844]">
                              <ImageIcon className="w-5 h-5" />
                              <span>{imageFile ? `Selected: ${imageFile}` : 'Or click to upload local photo'}</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Dynamic benefits inputs */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block">Benefits list</label>
                          <button
                            type="button"
                            onClick={() => addListField(prodBenefits, setProdBenefits)}
                            className="text-[10px] font-black text-[#3E0844] hover:underline"
                          >
                            + Add benefit
                          </button>
                        </div>
                        <div className="space-y-2">
                          {prodBenefits.map((ben, bIdx) => (
                            <div key={bIdx} className="flex gap-2 items-center">
                              <input
                                type="text"
                                placeholder={`Benefit #${bIdx + 1}`}
                                value={ben}
                                onChange={(e) => updateListField(bIdx, e.target.value, prodBenefits, setProdBenefits)}
                                className="flex-1 px-3 py-1.5 rounded-lg border border-purple-100 bg-white text-xs font-semibold"
                              />
                              <button
                                type="button"
                                onClick={() => removeListField(bIdx, prodBenefits, setProdBenefits)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Specifications */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] font-black text-gray-500 uppercase block mb-1">Material</label>
                          <input
                            type="text"
                            value={prodMaterial}
                            onChange={(e) => setProdMaterial(e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg border border-purple-100 bg-white text-xs font-semibold"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black text-gray-500 uppercase block mb-1">Beads size</label>
                          <input
                            type="text"
                            value={prodBeadSize}
                            onChange={(e) => setProdBeadSize(e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg border border-purple-100 bg-white text-xs font-semibold"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2 pt-4">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[#3E0844] hover:bg-[#6B1736] text-white font-extrabold uppercase tracking-widest rounded-xl text-xs shadow-md transition-colors"
                      >
                        Publish Crystal Bracelet
                      </button>
                    </div>
                  </form>
                </div>

                {/* 2. Existing Products List */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-black text-[#1C0320]">
                    Existing Bracelets List ({products.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map(p => (
                      <div key={p.id} className="bg-white rounded-2xl p-4 border border-purple-100 shadow-sm flex gap-3 items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={p.image} alt={p.title} className="w-12 h-12 rounded-xl object-cover border border-purple-100 shrink-0" />
                          <div>
                            <p className="font-serif font-black text-xs text-[#1C0320] leading-snug line-clamp-1">{p.title}</p>
                            <p className="text-[11px] font-bold text-gray-400 mt-0.5">₹{p.price}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteProduct(p.id)}
                          className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 transition-colors shrink-0"
                          title="Delete Bracelet"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: COURSES & WORKSHOPS */}
            {activeTab === 'courses' && (
              <div className="space-y-10">
                {/* 1. Add Course Form */}
                <div className="bg-purple-50/50 border border-purple-100/60 rounded-3xl p-5 sm:p-8 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#3E0844] text-white">
                      <Plus className="w-4 h-4" />
                    </span>
                    <h3 className="font-serif text-lg font-black text-[#1C0320]">
                      Add New Course or Workshop Program
                    </h3>
                  </div>

                  <form onSubmit={handleAddCourse} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Program Title *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Saraswati Attunement Level-1"
                          value={courseTitle}
                          onChange={(e) => setCourseTitle(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Subtitle / Short description *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Attract Wisdom, Focus, and Positive energy"
                          value={courseSubtitle}
                          onChange={(e) => setCourseSubtitle(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Category *</label>
                          <select
                            value={courseCategory}
                            onChange={(e) => setCourseCategory(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none text-xs font-bold"
                          >
                            {CATEGORIES.filter(c => c !== 'All').map(cat => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Type *</label>
                          <select
                            value={courseType}
                            onChange={(e) => setCourseType(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none text-xs font-bold"
                          >
                            <option value="Course">Course</option>
                            <option value="Workshop">Workshop</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Duration</label>
                        <input
                          type="text"
                          placeholder="e.g. 2 Hours Live Session"
                          value={courseDuration}
                          onChange={(e) => setCourseDuration(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Main Summary *</label>
                        <textarea
                          required
                          rows="4"
                          placeholder="Write a clear overview of the course curriculum..."
                          value={courseDescription}
                          onChange={(e) => setCourseDescription(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        ></textarea>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Image selector */}
                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Course Header Image *</label>
                        <div className="space-y-2">
                          <input
                            type="text"
                            placeholder="Paste image URL here..."
                            value={imageUrl}
                            onChange={(e) => {
                              setImageUrl(e.target.value);
                              setImageFile(null);
                            }}
                            className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                          />
                          <div className="flex items-center justify-center p-4 border border-dashed border-purple-200 bg-white/40 rounded-xl">
                            <label className="cursor-pointer flex flex-col items-center gap-1.5 text-xs text-purple-700 font-bold hover:text-[#3E0844]">
                              <ImageIcon className="w-5 h-5" />
                              <span>{imageFile ? `Selected: ${imageFile}` : 'Or click to upload local photo'}</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Syllabus steps */}
                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Syllabus Steps details</label>
                        <textarea
                          rows="3"
                          placeholder="Step 1: Introduction&#10;Step 2: Practical breathing&#10;Step 3: Protection shield"
                          value={courseDetails}
                          onChange={(e) => setCourseDetails(e.target.value)}
                          className="w-full px-4 py-2 rounded-xl border border-purple-100 bg-white text-xs font-semibold focus:outline-none"
                        ></textarea>
                      </div>

                      {/* Benefits */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block">Benefits list</label>
                          <button
                            type="button"
                            onClick={() => addListField(courseBenefits, setCourseBenefits)}
                            className="text-[10px] font-black text-[#3E0844] hover:underline"
                          >
                            + Add benefit
                          </button>
                        </div>
                        <div className="space-y-2">
                          {courseBenefits.map((ben, bIdx) => (
                            <div key={bIdx} className="flex gap-2 items-center">
                              <input
                                type="text"
                                placeholder={`Benefit #${bIdx + 1}`}
                                value={ben}
                                onChange={(e) => updateListField(bIdx, e.target.value, courseBenefits, setCourseBenefits)}
                                className="flex-1 px-3 py-1.5 rounded-lg border border-purple-100 bg-white text-xs font-semibold"
                              />
                              <button
                                type="button"
                                onClick={() => removeListField(bIdx, courseBenefits, setCourseBenefits)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2 pt-4">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[#3E0844] hover:bg-[#6B1736] text-white font-extrabold uppercase tracking-widest rounded-xl text-xs shadow-md transition-colors"
                      >
                        Publish Course/Workshop
                      </button>
                    </div>
                  </form>
                </div>

                {/* 2. Existing Courses List */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-black text-[#1C0320]">
                    Existing Courses & Workshops List ({courses.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {courses.map(c => (
                      <div key={c.id} className="bg-white rounded-2xl p-4 border border-purple-100 shadow-sm flex gap-3 items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={c.image} alt={c.title} className="w-12 h-12 rounded-xl object-cover border border-purple-100 shrink-0" />
                          <div className="min-w-0">
                            <p className="font-serif font-black text-xs text-[#1C0320] leading-snug line-clamp-1">{c.title}</p>
                            <p className="text-[10px] font-bold text-[#6B1736] uppercase tracking-widest mt-0.5">{c.type}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteCourse(c.id)}
                          className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 transition-colors shrink-0"
                          title="Delete Course"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: BLOG POSTS */}
            {activeTab === 'blogs' && (
              <div className="space-y-10">
                {/* 1. Add Blog Form */}
                <div className="bg-purple-50/50 border border-purple-100/60 rounded-3xl p-5 sm:p-8 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#3E0844] text-white">
                      <Plus className="w-4 h-4" />
                    </span>
                    <h3 className="font-serif text-lg font-black text-[#1C0320]">
                      Publish New Blog Post
                    </h3>
                  </div>

                  <form onSubmit={handleAddBlog} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Blog Title *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 5 Simple Steps to Find Your Peace"
                          value={blogTitle}
                          onChange={(e) => setBlogTitle(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Course Tag Link</label>
                        <input
                          type="text"
                          placeholder="e.g. General Abundance"
                          value={blogCourse}
                          onChange={(e) => setBlogCourse(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Short tagline *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Simple guidelines to heal stress and manifest wealth daily."
                          value={blogTagline}
                          onChange={(e) => setBlogTagline(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Blog Introduction *</label>
                        <textarea
                          required
                          rows="4"
                          placeholder="Write a simple introduction paragraph..."
                          value={blogIntro}
                          onChange={(e) => setBlogIntro(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        ></textarea>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Image Selector */}
                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Header Image *</label>
                        <div className="space-y-2">
                          <input
                            type="text"
                            placeholder="Paste image URL here..."
                            value={imageUrl}
                            onChange={(e) => {
                              setImageUrl(e.target.value);
                              setImageFile(null);
                            }}
                            className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                          />
                          <div className="flex items-center justify-center p-4 border border-dashed border-purple-200 bg-white/40 rounded-xl">
                            <label className="cursor-pointer flex flex-col items-center gap-1.5 text-xs text-purple-700 font-bold hover:text-[#3E0844]">
                              <ImageIcon className="w-5 h-5" />
                              <span>{imageFile ? `Selected: ${imageFile}` : 'Or click to upload local photo'}</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Inspirational Quote</label>
                        <input
                          type="text"
                          placeholder="e.g. When you align your mind, peace naturally follows."
                          value={blogQuote}
                          onChange={(e) => setBlogQuote(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-purple-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#3E0844]/25 text-sm font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-black text-[#3E0844] uppercase tracking-wider block mb-1.5">Spiritual Practice steps</label>
                        <textarea
                          rows="3"
                          placeholder="Step 1: Sit quietly...&#10;Step 2: Breathe deeply..."
                          value={blogTechSteps.join('\n')}
                          onChange={(e) => setBlogTechSteps(e.target.value.split('\n'))}
                          className="w-full px-4 py-2 rounded-xl border border-purple-100 bg-white text-xs font-semibold focus:outline-none"
                        ></textarea>
                      </div>
                    </div>

                    <div className="md:col-span-2 pt-4">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[#3E0844] hover:bg-[#6B1736] text-white font-extrabold uppercase tracking-widest rounded-xl text-xs shadow-md transition-colors"
                      >
                        Publish Blog Post
                      </button>
                    </div>
                  </form>
                </div>

                {/* 2. Existing Blogs List */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-black text-[#1C0320]">
                    Existing Published Blogs List ({blogs.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {blogs.map(b => (
                      <div key={b.id} className="bg-white rounded-2xl p-4 border border-purple-100 shadow-sm flex gap-3 items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={b.image} alt={b.title} className="w-12 h-12 rounded-xl object-cover border border-purple-100 shrink-0" />
                          <div className="min-w-0">
                            <p className="font-serif font-black text-xs text-[#1C0320] leading-snug line-clamp-1">{b.title}</p>
                            <p className="text-[9px] font-bold text-gray-400 mt-0.5 flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {b.date}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteBlog(b.id)}
                          className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 transition-colors shrink-0"
                          title="Delete Blog"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>
      )}

    </div>
  );
}
