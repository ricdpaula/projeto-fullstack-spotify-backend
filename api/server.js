import dotenv from "dotenv";
import express from "express";
import { db } from "./connect.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.get("/", (req, res) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.send("Olá, Mundo");
});
app.get("/artists", async (req, res) => {
  res.header({ "Access-Control-Allow-Origin": "*" })
  res.send(await db.collection("artists").find({}).toArray());
});
app.get("/songs", async (req, res) => {
  res.header({ "Access-Control-Allow-Origin": "*" })
  res.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta: ${PORT}`);
});
