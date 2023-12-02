const { MongoClient } = require('mongodb');
const uri = "***";

const client = new MongoClient(uri);

async function run() {
    const database = client.db('notes');
    const notes = database.collection('notes');

    // Create Data
    const query = [{
        id: 1,
        title: 'ノート１のタイトルです',
        subTitle: 'ノート１のサブタイトルです',
        bodyText: 'ノート１の本文です'
    },
    {
        id: 2,
        title: 'ノート２のタイトルです',
        subTitle: 'ノート２のサブタイトルです',
        bodyText: 'ノート２の本文です'
    }];

    const note = await notes.insertMany(query);
    console.log(note);
    await client.close();
}

run();
