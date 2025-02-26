import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://legenddesign:legenddevtest123@cluster0.bf4to.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify");

