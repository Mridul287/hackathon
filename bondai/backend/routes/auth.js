const { Router } = require('express');

module.exports = (db) => {
    const router = Router();
    const col = () => db.collection('user');

    // POST /api/auth/login — validate credentials
    router.post('/login', async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required.' });
            }

            const user = await col().findOne({ email: email.toLowerCase().trim() });
            if (!user) {
                return res.status(401).json({ error: 'Invalid email or password.' });
            }

            // Plain-text comparison (hackathon scope — no bcrypt)
            if (user.password !== password) {
                return res.status(401).json({ error: 'Invalid email or password.' });
            }

            const { password: _, ...safeUser } = user;
            res.json({ success: true, user: safeUser });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // POST /api/auth/register — create a new user account
    router.post('/register', async (req, res) => {
        try {
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                return res.status(400).json({ error: 'Name, email, and password are required.' });
            }

            // Check if email already taken
            const existing = await col().findOne({ email: email.toLowerCase().trim() });
            if (existing) {
                return res.status(409).json({ error: 'An account with this email already exists.' });
            }

            if (password.length < 6) {
                return res.status(400).json({ error: 'Password must be at least 6 characters.' });
            }

            const newUser = {
                name: name.trim(),
                email: email.toLowerCase().trim(),
                password,
                avatar: null,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            const result = await col().insertOne(newUser);
            const { password: _, ...safeUser } = newUser;
            res.status(201).json({ success: true, user: { _id: result.insertedId, ...safeUser } });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    return router;
};
