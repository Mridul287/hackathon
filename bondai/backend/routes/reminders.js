const { Router } = require('express');

module.exports = (db) => {
    const router = Router();
    const col = () => db.collection('reminders');

    // GET /api/reminders
    router.get('/', async (req, res) => {
        try {
            const filter = {};
            if (req.query.relationshipId) {
                filter.relationshipId = req.query.relationshipId;
            }
            if (req.query.completed !== undefined) {
                filter.isCompleted = req.query.completed === 'true';
            }
            const docs = await col().find(filter).toArray();

            res.json(docs);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // POST /api/reminders — create a new reminder
    router.post('/', async (req, res) => {
        try {
            const doc = {
                ...req.body,
                isCompleted: false,
                createdAt: new Date(),
            };
            const result = await col().insertOne(doc);
            res.status(201).json({ _id: result.insertedId, ...doc });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    return router;
};
