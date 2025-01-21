require("dotenv").config(); // Importa e configura o dotenv
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const itemRoutes = require("./routes/crudRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

app.use("/api/items", itemRoutes);

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
