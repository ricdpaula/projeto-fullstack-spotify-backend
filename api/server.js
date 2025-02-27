import dotenv from "dotenv";
import express from "express";
import { db } from "./connect.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(cors(), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://projeto-fullstack-spotify.vercel.app/"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Olá, Mundo");
});
app.get("/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});
app.get("/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta: ${PORT}`);
});
