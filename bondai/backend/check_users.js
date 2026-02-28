const { MongoClient } = require('mongodb');

const MONGO_URI = 'mongodb://localhost:27017';
const DB_NAME = 'aura_connect';

async function main() {
    const client = new MongoClient(MONGO_URI);
    try {
        await client.connect();
        const db = client.db(DB_NAME);
        const users = await db.collection('user').find({}).toArray();
        console.log('--- Users in database ---');
        console.log(JSON.stringify(users, null, 2));
        console.log('-------------------------');
    } catch (err) {
        console.error('Error:', err.message);
    } finally {
        await client.close();
    }
}

main();
