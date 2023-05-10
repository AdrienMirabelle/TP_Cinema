import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { default as client } from './database/db_connect.js';
import ModelFilm from './models/ModelFilm.js';

import { ObjectId } from 'mongodb';

dotenv.config();
const db_name = process.env.MONGO_DB_NAME;
const collection_name = process.env.MONGO_COLLECTION_NAME;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    client.db(db_name).collection(collection_name).find().toArray()
        .then(results => {
            res.json(results);
        }
        )
        .catch(error => console.error(error));
}
);

app.delete('/delete/:id', function(req, res) {
    const id = req.params.id;
    client.db(db_name).collection(collection_name).deleteOne({_id: new ObjectId(id)})
        .then(result => {
            res.json(result);
        }
        )
        .catch(error => console.error(error));
});

app.post('/addFilm', (req, res) => {
    client.db(db_name).collection(collection_name).insertOne(req.body)
        .then(result => {
            res.json(result);
        })
        .catch(error => console.error(error));
}
);

app.listen(3000, function () {
    console.log('server listening on http://localhost:3000/');
});