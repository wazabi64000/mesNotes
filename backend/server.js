import "dotenv/config";
import express from "express";
import { pool } from "./config/db.js";

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send(
    `<h1>Mon super serveur qui fonctionne grace à la bénidiction de Nissrine</h1><br>
    <h2>Mon super serveur qui fonctionne grace à la bénidiction de Nissrine</h2>`,
  );
});

app.listen(PORT, () => {
  console.log(`serveur tourne sur http://localhost:${PORT}`);
});
