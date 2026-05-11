//var express = require('express');
import express from "express";
const router = express.Router();
//Import logger
import logger from "../lib/winston.js";

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get("/", function (req, res, next) {
  res.render("index", { title: "Proyecto Asombroso ✨" });
});

//Rutas para pruebas de logs
router.get("/test-logs", (req, res) => {
  //Generar logs
  logger.error("Esto es una prueba del log tipo Error");
  logger.warn("Esto es una prueba del log tipo Warn");
  logger.info("Esto es una prueba del log tipo Info");
  logger.http("Esto es una prueba del log tipo http");
  logger.debug("Esto es una prueba del log tipo Debug");

  //Estructurando respuesta
  res.json({
    message: "Se crearon logs de prueba",
    archivos: [
      "logs/app/YYYY-MM-DD.log",
      "logs/app-readble.log",
      "logs/error.log",
    ],
  });
});

//module.exports = router;
export default router;
