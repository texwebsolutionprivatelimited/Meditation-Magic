const IMAGEKIT_ENDPOINT = import.meta.env.VITE_IMAGEKIT_ENDPOINT || 'https://upload.imagekit.io/api/v1/files/upload';
const PUBLIC_KEY = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY;

/**
 * Helper to convert File/Blob to Base64 data URL
 */
const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

/**
 * Direct client-side upload fallback (Used ONLY in Local Development Mode)
 */
const uploadDirect = async (file, fileName) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName || `upload-${Date.now()}`);
    formData.append('useUniqueFileName', 'true');
    formData.append('folder', '/meditation-magic');

    const authHeader = 'Basic ' + btoa(PRIVATE_KEY + ':');

    const response = await fetch(IMAGEKIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Local ImageKit upload failed: ${response.statusText} (${errorText})`);
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('Local development upload error:', error);
    throw error;
  }
};

/**
 * Secure serverless gateway upload (Used in Production Mode)
 */
const uploadSecure = async (file, fileName) => {
  try {
    let base64File = file;
    if (file instanceof Blob || file instanceof File) {
      base64File = await toBase64(file);
    }

    const response = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file: base64File,
        fileName: fileName || `upload-${Date.now()}`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Secure gateway upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('Secure gateway upload error:', error);
    throw error;
  }
};

/**
 * Uploads a file to ImageKit.
 * Dynamically switches between direct upload in Local Dev and secure backend API in Vercel production.
 */
export const uploadToImageKit = async (file, fileName) => {
  if (import.meta.env.DEV) {
    console.log('Running in Local Dev Mode: Using direct client-side upload.');
    return uploadDirect(file, fileName);
  }

  console.log('Running in Production Mode: Routing upload through secure Vercel Serverless Function.');
  return uploadSecure(file, fileName);
};

export const IMAGEKIT_CONFIG = {
  urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/s975zogcgm',
  publicKey: PUBLIC_KEY,
};
