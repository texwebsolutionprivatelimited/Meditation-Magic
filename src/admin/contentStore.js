import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, doc, setDoc, getDocs, deleteDoc, onSnapshot } from 'firebase/firestore';

export const CONTENT_UPDATED_EVENT = 'meditation-magic-content-updated';

const STORAGE_KEYS = {
  courses: 'mm_admin_courses',
  products: 'mm_admin_products',
  blogs: 'mm_admin_blogs',
  contacts: 'mm_admin_contacts',
};

const DEFAULT_CONTENT = {
  courses: [],
  products: [],
  blogs: [],
  contacts: [],
};

// Local storage caching helpers for instant load (Stale-While-Revalidate UX pattern)
const safeJsonParse = (value, fallback) => {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

export const getCollection = (collName) => {
  if (typeof window === 'undefined') return DEFAULT_CONTENT[collName] || [];
  return safeJsonParse(window.localStorage.getItem(STORAGE_KEYS[collName]), DEFAULT_CONTENT[collName] || []);
};

export const saveCollection = async (collName, items) => {
  // Update local storage synchronously so the user feels instant snappiness
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEYS[collName], JSON.stringify(items));
    window.dispatchEvent(new Event(CONTENT_UPDATED_EVENT));
  }

  // Sync to Firestore in the background
  try {
    const colRef = collection(db, collName);
    const querySnapshot = await getDocs(colRef);
    const existingIds = querySnapshot.docs.map((doc) => doc.id);
    const newIds = items.map((item) => String(item.id));

    // Delete items that are no longer in the list
    for (const id of existingIds) {
      if (!newIds.includes(id)) {
        await deleteDoc(doc(db, collName, id));
      }
    }

    // Add or update current items
    for (const item of items) {
      const sanitizedItem = JSON.parse(JSON.stringify(item));
      await setDoc(doc(db, collName, String(item.id)), sanitizedItem);
    }
  } catch (error) {
    console.error(`Error syncing ${collName} collection to Firestore:`, error);
  }
};

export const resetCollection = async (collName) => {
  await saveCollection(collName, []);
};

export const useAdminContent = (collName) => {
  const [items, setItems] = useState(() => getCollection(collName));

  useEffect(() => {
    // Register real-time Firestore snapshot listener
    const colRef = collection(db, collName);
    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        const fetchedItems = snapshot.docs.map((doc) => doc.data());
        
        // Sort items logically
        let sortedItems = fetchedItems;
        if (collName === 'courses') {
          // Sort courses by type and title
          sortedItems = fetchedItems.sort((a, b) => a.title.localeCompare(b.title));
        } else if (collName === 'products') {
          // Sort products by title
          sortedItems = fetchedItems.sort((a, b) => a.title.localeCompare(b.title));
        } else if (collName === 'blogs') {
          // Sort blogs by id or date descending
          sortedItems = fetchedItems.sort((a, b) => Number(b.id) - Number(a.id));
        } else if (collName === 'contacts') {
          // Sort contacts by date/id descending so new queries are at the top
          sortedItems = fetchedItems.sort((a, b) => Number(b.id) - Number(a.id));
        }

        // Save to local cache
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(STORAGE_KEYS[collName], JSON.stringify(sortedItems));
        }
        setItems(sortedItems);
      },
      (error) => {
        console.error(`Firestore listener error on ${collName}:`, error);
      }
    );

    // Keep local storage event sync (in case other tabs update local storage)
    const syncLocal = () => {
      setItems(getCollection(collName));
    };
    window.addEventListener(CONTENT_UPDATED_EVENT, syncLocal);
    window.addEventListener('storage', syncLocal);

    return () => {
      unsubscribe();
      window.removeEventListener(CONTENT_UPDATED_EVENT, syncLocal);
      window.removeEventListener('storage', syncLocal);
    };
  }, [collName]);

  return items;
};

// Legacy auth status checks for backward compatibility
export const getAdminAccount = () => {
  if (typeof window === 'undefined') return null;
  return safeJsonParse(window.localStorage.getItem('mm_admin_account'), null);
};

export const saveAdminAccount = (account) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('mm_admin_account', JSON.stringify(account));
  }
};

export const isAdminLoggedIn = () => {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem('mm_admin_session') === 'active';
};

export const setAdminSession = (isActive) => {
  if (typeof window !== 'undefined') {
    if (isActive) {
      window.localStorage.setItem('mm_admin_session', 'active');
    } else {
      window.localStorage.removeItem('mm_admin_session');
    }
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

export const COLLECTION_LABELS = {
  courses: 'Courses / Workshops',
  products: 'Products',
  blogs: 'Blogs',
  contacts: 'Contact Queries',
};

export const PRIVATE_SESSION_TYPES = ['1-to-1 Session', 'Private Session'];

export const isPrivateSession = (type) => PRIVATE_SESSION_TYPES.includes(type);
