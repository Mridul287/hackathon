const { MongoClient } = require('mongodb');

const MONGO_URI = 'mongodb://localhost:27017';
const DB_NAME = 'aura_connect';

async function main() {
    const client = new MongoClient(MONGO_URI);
    try {
        await client.connect();
        const db = client.db(DB_NAME);
        const relationships = await db.collection('relationships').find({}, { projection: { name: 1, avatar: 1 } }).toArray();
        console.log('--- Relationships Avatars ---');
        console.log(JSON.stringify(relationships, null, 2));
        console.log('-----------------------------');
    } catch (err) {
        console.error('Error:', err.message);
    } finally {
        await client.close();
    }
}

main();
