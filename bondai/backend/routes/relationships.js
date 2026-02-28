const { Router } = require('express');
const { ObjectId } = require('mongodb');

module.exports = (db) => {
    const router = Router();
    const col = () => db.collection('relationships');

    // GET /api/relationships
    router.get('/', async (req, res) => {
        try {
            const docs = await col().find({}).toArray();
            res.json(docs);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // GET /api/relationships/:id
    router.get('/:id', async (req, res) => {
        try {
            const doc = await col().findOne({ _id: new ObjectId(req.params.id) });
            if (!doc) return res.status(404).json({ error: 'Not found' });
            res.json(doc);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // POST /api/relationships — create a new relationship
    router.post('/', async (req, res) => {
        try {
            const doc = {
                ...req.body,
                healthScore: req.body.healthScore ?? 70,
                createdAt: new Date(),
                lastInteractionDate: new Date(),
            };
            const result = await col().insertOne(doc);
            res.status(201).json({ _id: result.insertedId, ...doc });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    return router;
};
