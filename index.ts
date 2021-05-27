import Server from "./classes/server";
import { router } from "./routes/router";
import express from "express";
import cors from "cors";

const server = new Server();

//body parser
server.app.use(express.urlencoded({ extended: true }));
server.app.use(express.json());

//cors configuracion
server.app.use(cors({ origin: true, credentials: true }));

//rutas - router
server.app.use("/", router);

server.startServer(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
});
