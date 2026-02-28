const { MongoClient } = require('mongodb');

const MONGO_URI = 'mongodb://localhost:27017';
const DB_NAME = 'aura_connect';

async function main() {
    const client = new MongoClient(MONGO_URI);
    try {
        await client.connect();
        const db = client.db(DB_NAME);

        console.log(`Connected to DB: ${DB_NAME}`);

        const collections = await db.listCollections().toArray();
        console.log('Collections in DB:', collections.map(c => c.name));

        const users = await db.collection('user').find({}).toArray();
        console.log('--- Content of "user" collection ---');
        console.log(JSON.stringify(users, null, 2));
        console.log('------------------------------------');

        if (collections.some(c => c.name === 'users')) {
            const usersAlt = await db.collection('users').find({}).toArray();
            console.log('--- Content of "users" collection ---');
            console.log(JSON.stringify(usersAlt, null, 2));
            console.log('-------------------------------------');
        }

    } catch (err) {
        console.error('Error:', err.message);
    } finally {
        await client.close();
    }
}

main();
