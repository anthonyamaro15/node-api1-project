const express = require("express");
const userRoute = require("../users/userRoute");

const server = express();

server.use(express.json());
server.use("/api/users", userRoute);

module.exports = server;
