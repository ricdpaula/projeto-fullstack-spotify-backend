import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config({path: "../.env"})

const URI = process.env.URI_DATABASE;

const client = new MongoClient(URI);

export const db = client.db("spotify");

