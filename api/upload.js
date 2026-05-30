export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { file, fileName } = req.body;

    if (!file) {
      return res.status(400).json({ error: 'Missing file data' });
    }

    // Retrieve the secret private key securely from server-side environment variables
    const IMAGEKIT_ENDPOINT = process.env.IMAGEKIT_ENDPOINT || 'https://upload.imagekit.io/api/v1/files/upload';
    const PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;

    if (!PRIVATE_KEY) {
      return res.status(500).json({ error: 'Server configuration error: missing private key' });
    }

    // Prepare FormData for the ImageKit API
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName || `upload-${Date.now()}`);
    formData.append('useUniqueFileName', 'true');
    formData.append('folder', '/meditation-magic');

    // Create Basic Authentication using server-side Buffer
    const authHeader = 'Basic ' + Buffer.from(PRIVATE_KEY + ':').toString('base64');

    const response = await fetch(IMAGEKIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: `ImageKit upload failed: ${errorText}` });
    }

    const data = await response.json();
    return res.status(200).json({ url: data.url });
  } catch (error) {
    console.error('Serverless secure upload gateway error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
