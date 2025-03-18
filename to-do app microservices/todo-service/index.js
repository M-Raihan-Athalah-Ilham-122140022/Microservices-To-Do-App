const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_TODOS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("TodosDB Connected"))
    .catch(err => console.error(err));

app.use("/api/todos", todoRoutes);

app.listen(5002, () => console.log("Todo Service running on port 5002"));