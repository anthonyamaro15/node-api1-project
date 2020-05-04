const express = require("express");
const cors = require("cors");
const userRoute = require("../users/userRoute");

const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/users", userRoute);

module.exports = server;
