// importando biblioteca winston
import winston, { format } from "winston";
import path from "node:path";
import fs from "node:fs";
// Importando biblioteca de transporte
const { transports } = winston;

// Desestructurando funciones de format
const { combine, timestamp, label, printf, colorize, prettyPrint } = format;

// Creando los directorios raiz
const __rootDir = path.resolve(process.cwd());

//Creando la ruta del directorio de logs en la raiz del proyecto
// la raiz del proyecto
const logsDir = path.join(__rootDir, "logs");
// Rutina que  crea la carpeta donde iran los logs solo
// en caso de no existir
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Definiendo esquema de colores
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "blue",
};

// Agregando esquema de  olores a winston
winston.addColors(colors);

// Creamos los formatos de salida para los diferentes transportes
const myconsoleFormat = combine(
  // Agregando colores a la salida de consola
  colorize({ all: true }),
  // Agregando una etiqueta a log
  label({ label: "🎙️" }),
  // Agregando formato de fecha
  timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
  // Función de impresion
  printf(
    (info) => `${info.timestamp} ${info.label} ${info.level}: ${info.message}`,
  ),
);

// Formato para los archivos de logs
const myFileFormat = combine(
  // Quitando la colorización
  format.uncolorize(),
  // Agregamos fecha en formado ISO
  timestamp(),
  // Salida en formato JSON
  format.json(),
);

// Creando los transportes
// Creando el objeto de opciones para cada transporte
const options = {
  errorFile: {
    level: "error",
    filename: path.join(__rootDir, "logs", "error.log"),
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    format: myFileFormat,
  },
  console: {
    level: "debug",
    handleExceptions: true,
    format: myConsoleFormat,
  },
  readableFile: {
    filename: path.join(logsDir, "app-readable.log"),
    level: "info",
    format: combine(
      format.uncolorize(),
      timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
      prettyPrint(),
    ),
    maxsize: 5242880,
    maxFiles: 5,
  },
  dailyRotateFile: {
    filename: path.join(logsDir, "app-%DATE%.log"),
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
    level: "info",
    format: myFileFormat,
  },
};
