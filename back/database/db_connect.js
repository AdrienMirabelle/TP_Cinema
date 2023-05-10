import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const url = process.env.MONGO_CLUSTER_URI;

const db_link = `mongodb+srv://${user}:${password}@${url}/?retryWrites=true&w=majority";`;

const client = new MongoClient(db_link);
async function connect() {
    try {
        await client.connect();
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("Failed to connect to MongoDB", error);
    }
}
connect();
export default client;