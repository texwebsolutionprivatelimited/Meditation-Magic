import { useEffect, useState } from 'react';
import { WORKSHOPS_DATA } from '../data/workshops';
import { PRODUCTS_DATA } from '../data/products';
import { BLOGS_DATA } from '../data/blogs';

export const CONTENT_UPDATED_EVENT = 'meditation-magic-content-updated';

const STORAGE_KEYS = {
  courses: 'mm_admin_courses',
  products: 'mm_admin_products',
  blogs: 'mm_admin_blogs',
  admin: 'mm_admin_account',
  session: 'mm_admin_session',
};

const DEFAULT_CONTENT = {
  courses: WORKSHOPS_DATA,
  products: PRODUCTS_DATA,
  blogs: BLOGS_DATA,
};

export const COLLECTION_LABELS = {
  courses: 'Courses / Workshops',
  products: 'Products',
  blogs: 'Blogs',
};

export const PRIVATE_SESSION_TYPES = ['1-to-1 Session', 'Private Session'];

export const isPrivateSession = (type) => PRIVATE_SESSION_TYPES.includes(type);

const emitContentUpdate = () => {
  window.dispatchEvent(new Event(CONTENT_UPDATED_EVENT));
};

const safeJsonParse = (value, fallback) => {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

export const getCollection = (collection) => {
  if (typeof window === 'undefined') return DEFAULT_CONTENT[collection] || [];
  return safeJsonParse(window.localStorage.getItem(STORAGE_KEYS[collection]), DEFAULT_CONTENT[collection] || []);
};

export const saveCollection = (collection, items) => {
  window.localStorage.setItem(STORAGE_KEYS[collection], JSON.stringify(items));
  emitContentUpdate();
};

export const resetCollection = (collection) => {
  window.localStorage.removeItem(STORAGE_KEYS[collection]);
  emitContentUpdate();
};

export const useAdminContent = (collection) => {
  const [items, setItems] = useState(() => getCollection(collection));

  useEffect(() => {
    const sync = () => setItems(getCollection(collection));
    window.addEventListener(CONTENT_UPDATED_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(CONTENT_UPDATED_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, [collection]);

  return items;
};

export const getAdminAccount = () => {
  if (typeof window === 'undefined') return null;
  return safeJsonParse(window.localStorage.getItem(STORAGE_KEYS.admin), null);
};

export const saveAdminAccount = (account) => {
  window.localStorage.setItem(STORAGE_KEYS.admin, JSON.stringify(account));
};

export const isAdminLoggedIn = () => {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(STORAGE_KEYS.session) === 'active';
};

export const setAdminSession = (isActive) => {
  if (isActive) {
    window.localStorage.setItem(STORAGE_KEYS.session, 'active');
  } else {
    window.localStorage.removeItem(STORAGE_KEYS.session);
  }
};

export const createSlug = (value) => {
  const slug = String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug || `item-${Date.now()}`;
};

export const emptyItemFor = (collection) => {
  if (collection === 'products') {
    return {
      id: Date.now(),
      title: '',
      price: 0,
      rating: 5,
      badge: 'New',
      badgeColor: 'bg-purple-100 text-purple-700',
      tagline: '',
      accent: 'from-[#a78bfa] to-[#7c3aed]',
      image: '',
      subtitle: '',
      description: '',
      benefits: [],
      specifications: {
        material: '',
        beadsSize: '',
        elasticity: '',
        origin: '',
      },
      howToUse: [],
      energization: '',
    };
  }

  if (collection === 'blogs') {
    return {
      id: Date.now(),
      title: '',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      image: '',
      course: '',
      tagline: '',
      author: 'Neelam Arora',
      readTime: '5 mins read',
      intro: '',
      quote: '',
      sections: [],
      technique: {
        title: '',
        steps: [],
      },
      conclusion: '',
    };
  }

  return {
    id: '',
    title: '',
    subtitle: '',
    category: 'Spiritual Healing',
    duration: '',
    type: 'Course',
    description: '',
    details: '',
    benefits: [],
    whoCanJoin: [],
    whyChoose: '',
    faqs: [],
    image: '',
  };
};
