// SECURE BACKEND GATEWAY BY ZYNC STUDIO
export default async function handler(req, res) {
    // Sirf POST requests allowed hain
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { contents } = req.body;
    // Yeh key seedha Vercel ke secure cloud se load hogi, kisi ko nahi dikhegi
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: "Secure API Key configuration missing on Vercel backend." });
    }

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents })
        });

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Backend routing error: " + error.message });
    }
}