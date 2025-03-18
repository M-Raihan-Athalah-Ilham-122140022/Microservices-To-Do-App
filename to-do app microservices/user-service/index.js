const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_USERS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("UsersDB Connected"))
    .catch(err => console.error(err));

app.use("/api/users", userRoutes);

app.listen(5001, () => console.log("User Service running on port 5001"));