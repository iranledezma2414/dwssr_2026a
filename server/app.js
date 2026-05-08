import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { fileURLToPath } from "url";
import hbs from "hbs";
import logger from "./lib/winston.js";
// Importando enrutadores
import indexRouter from "#routes/index.js";
import usersRouter from "#routes/users.js";
import authorRouter from "#routes/author.js";
// Importando el registrador de Helpers
import { registerViteHelper } from "./lib/vite.js";

// Recreando variable de path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var app = express();

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
// Registrando el Helper para el ENGINE
registerViteHelper(hbs);

// Redirgiendo el flujo de logs de morgan a winston
app.use(
  morgan("dev", {
    stream: {
      write: (msg) => logger.info(msg.trim()),
    },
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Archivos estaticos de Vite
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "dist")));
}
//Archivo estatico del backend
app.use(express.static(path.join(__dirname, "...", "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/author", authorRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
