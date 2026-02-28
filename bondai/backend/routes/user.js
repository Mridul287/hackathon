const { Router } = require('express');

module.exports = (db) => {
    const router = Router();
    const col = () => db.collection('user');

    // GET /api/user — returns the first user (single-user app)
    router.get('/', async (req, res) => {
        try {
            const user = await col().findOne({});
            if (!user) return res.status(404).json({ error: 'No user found' });
            // Remove password from response
            const { password, ...safeUser } = user;
            res.json(safeUser);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    return router;
};
