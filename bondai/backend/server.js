require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'aura_connect';

app.use(cors());
app.use(express.json());

// Connect to MongoDB once and share across routes
let db;
MongoClient.connect(MONGO_URI)
    .then((client) => {
        db = client.db(DB_NAME);
        console.log(`✅ Connected to MongoDB — database: ${DB_NAME}`);

        // Mount routes after DB is ready
        app.use('/api/auth', require('./routes/auth')(db));
        app.use('/api/relationships', require('./routes/relationships')(db));
        app.use('/api/alerts', require('./routes/alerts')(db));
        app.use('/api/reminders', require('./routes/reminders')(db));
        app.use('/api/insights', require('./routes/insights')(db));
        app.use('/api/user', require('./routes/user')(db));

        // Health check
        app.get('/api/health', (req, res) => res.json({ status: 'ok', db: DB_NAME }));

        app.listen(PORT, () => {
            console.log(`🚀 Backend running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    });
