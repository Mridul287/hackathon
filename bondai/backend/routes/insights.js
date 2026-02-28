const { Router } = require('express');

module.exports = (db) => {
    const router = Router();
    const col = () => db.collection('insights');

    // GET /api/insights
    router.get('/', async (req, res) => {
        try {
            const filter = {};
            if (req.query.relationshipId) {
                filter.relationshipId = req.query.relationshipId;
            }
            const docs = await col().find(filter).toArray();
            res.json(docs);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    return router;
};
