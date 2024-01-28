var express = require('express');
var router = express.Router();
const cors = require('cors');
require('dotenv').config();

const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/', async (req, res,) => {
    try {
        const database = client.db('notes'); 
        const notes = database.collection('notes');

        const query = { id: 1 };
        const note = await notes.findOne(query);
        res.json(note);
    } catch (error) {
        console.error("Error fetching note:", error);
        res.status(500).json({ message: "Error fetching note" });
    }
});

module.exports = router;


/*
* Response Data (All Notes)
*/
// const responseObjectDataAll = {
//     textObject1: {
//         id: 1,
//         title: 'ノート１のタイトルです',
//         subTitle: 'ノート１のサブタイトルです',
//         bodyText: 'ノート１の本文です'
//     },
//     textObject2: {
//         id: 2,
//         title: 'ノート２のタイトルです',
//         subTitle: 'ノート２のサブタイトルです',
//         bodyText: 'ノート２の本文です'
//     },
// };

/**
* メモを全件取得するAPI
* @returns {Object[]} data
* @returns {number} data.id - ID
* @returns {string} data.title - タイトル
* @returns {string} data.text - 内容
*/
// router.get('/', function (req, res, next) {
//     // 全件取得して返す
//     res.json(responseObjectDataAll);
// })
// module.exports = router;




 