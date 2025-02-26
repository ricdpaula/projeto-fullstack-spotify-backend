import express from 'express';
import { db } from './connect.js';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config({path: "../.env"})

const app = express();
const PORT = process.env.PORT;
console.log(PORT)

app.use(cors())

app.get("/", (req, res)=>{
    res.send('Olá, Mundo')
})
app.get("/artists", async (req, res)=>{
    res.send(await db.collection("artists").find({}).toArray())
})
app.get("/songs", async (req, res)=>{
    res.send(await db.collection("songs").find({}).toArray())
})

app.listen(PORT, ()=>{
    console.log(`Servidor está escutando na porta: ${PORT}`);
})