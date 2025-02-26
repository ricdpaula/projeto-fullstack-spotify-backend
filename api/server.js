import express from "express";
import { db } from "./connect.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
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
