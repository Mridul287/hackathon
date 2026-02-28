const { Router } = require('express');

module.exports = (db) => {
    const router = Router();
    const col = () => db.collection('alerts');

    // GET /api/alerts?resolved=false
    router.get('/', async (req, res) => {
        try {
            const filter = {};
            if (req.query.relationshipId) {
                filter.relationshipId = req.query.relationshipId;
            }
            if (req.query.resolved !== undefined) {
                filter.isResolved = req.query.resolved === 'true';
            }
            const docs = await col().find(filter).toArray();

            res.json(docs);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    return router;
};
