import https from 'https';
import fs from 'fs';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { ObjectId } from 'mongodb';
import bodyParser from 'body-parser';

import { default as client } from './database/db_connect.js';
import { default as Film } from './models/ModelFilm.js';

dotenv.config();
const db_name = process.env.MONGO_DB_NAME;
const collection_name = process.env.MONGO_COLLECTION_NAME;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    client.db(db_name).collection(collection_name).find().sort({ titre: 1 }).toArray()
        .then(results => {
            res.json(results);
        }
        )
        .catch(error => console.error(error));
}
);

app.get('/film/:id', (req, res) => {
    const id = req.params.id;
    client.db(db_name).collection(collection_name).findOne({ _id: new ObjectId(id) })
        .then(results => {
            res.json(results);
        }
        )
        .catch(error => console.error(error));
}
);

app.delete('/delete/:id', function (req, res) {
    const id = req.params.id;
    client.db(db_name).collection(collection_name).deleteOne({ _id: new ObjectId(id) })
        .then(result => {
            res.json(result);
        }
        )
        .catch(error => console.error(error));
});

app.post('/addFilm', (req, res) => {
    const newFilm = new Film(req.body.film);
    client.db(db_name).collection(collection_name).insertOne(newFilm)
        .then(result => {
            res.json(result);
        })
        .catch(error => console.error(error));
});

app.put('/updateFilm/:id', (req, res) => {
    const id = req.params.id;
    const updatedFilm = new Film(req.body);
    client.db(db_name).collection(collection_name).updateOne({ _id: new ObjectId(id) }, { $set: updatedFilm })
        .then(result => {
            res.json(result);
        }
        )
        .catch(error => console.error(error));
});

https.createServer({
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('cert.pem')
}, app).listen(3000, () => {
    console.log('server listening on https://localhost:3000/');
});