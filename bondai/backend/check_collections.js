const { MongoClient } = require('mongodb');

const MONGO_URI = 'mongodb://localhost:27017';
const DB_NAME = 'aura_connect';

async function main() {
    const client = new MongoClient(MONGO_URI);
    try {
        await client.connect();
        const db = client.db(DB_NAME);

        const insights = await db.collection('insights').find({}).limit(5).toArray();
        const alerts = await db.collection('alerts').find({}).limit(5).toArray();
        const reminders = await db.collection('reminders').find({}).limit(5).toArray();

        console.log('--- Insights (Sample) ---');
        console.log(JSON.stringify(insights, null, 2));
        console.log('--- Alerts (Sample) ---');
        console.log(JSON.stringify(alerts, null, 2));
        console.log('--- Reminders (Sample) ---');
        console.log(JSON.stringify(reminders, null, 2));

    } catch (err) {
        console.error('Error:', err.message);
    } finally {
        await client.close();
    }
}

main();
