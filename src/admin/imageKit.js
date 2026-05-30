const IMAGEKIT_ENDPOINT = 'https://upload.imagekit.io/api/v1/files/upload';
const PUBLIC_KEY = 'public_0aFZqOjmJChKeNn7yIHu1M8j0Ss=';
const PRIVATE_KEY = 'private_KHSYT89ojB2bY3uKbWCwM/11/X8=';

/**
 * Uploads a file to ImageKit and returns the secure URL of the uploaded asset.
 * @param {File|Blob|string} file - The file to upload (File/Blob object or base64 data-URL).
 * @param {string} fileName - The desired file name.
 * @returns {Promise<string>} The uploaded image secure URL.
 */
export const uploadToImageKit = async (file, fileName) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName || `upload-${Date.now()}`);
    formData.append('useUniqueFileName', 'true');
    formData.append('folder', '/meditation-magic');

    // Create basic authentication header with the private key
    // Note: privateKey goes in the username slot, password slot is empty
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
      throw new Error(`ImageKit upload failed: ${response.statusText} (${errorText})`);
    }

    const data = await response.json();
    return data.url; // Returns the secure CDN url
  } catch (error) {
    console.error('Error uploading image to ImageKit:', error);
    throw error;
  }
};

export const IMAGEKIT_CONFIG = {
  urlEndpoint: 'https://ik.imagekit.io/s975zogcgm',
  publicKey: PUBLIC_KEY,
};
