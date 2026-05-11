#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from "../app.js";
// eslint-disable-next-line no-unused-vars
import createDebug from "debug";
import http from "node:http";

// 1. IMPORTANDO WINSTON LOGGER
import logger from "../lib/winston.js";

/**
 * Get port from environment and store in Express.
 */

// 2. REEMPLAZANDO console.info POR logger.info
logger.info("Puerto normalizado");
var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
logger.info("Server will listen on port " + port);

/**
 * Create HTTP server.
 */
logger.info("Creating HTTP server on port " + port);
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      // 3. REEMPLAZANDO console.error POR logger.error
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      // 3. REEMPLAZANDO console.error POR logger.error
      logger.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;

  // 4. REEMPLAZANDO console.log POR logger.info
  logger.info(`✅ Listening on ${bind}`);
}
