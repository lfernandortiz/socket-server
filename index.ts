import Server from "./classes/server";
import { router } from "./routes/router";
import express from "express";
import bodyParser from "body-parser";

const server = new Server();

server.app.use(express.urlencoded({ extended: true }));
server.app.use(express.json());

server.app.use("/", router);

server.startServer(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
});
