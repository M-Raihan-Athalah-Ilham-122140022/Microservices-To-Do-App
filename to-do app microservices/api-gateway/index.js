const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(express.json());

app.use("/api/users", createProxyMiddleware({ target: "http://localhost:5001", changeOrigin: true }));
app.use("/api/todos", createProxyMiddleware({ target: "http://localhost:5002", changeOrigin: true }));

app.listen(5000, () => console.log("API Gateway running on port 5000"));