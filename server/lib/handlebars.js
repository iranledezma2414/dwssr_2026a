import path from "node:path";
import { fileURLToPath } from "node:url";
// importando el motor de plantillas
import { create as createHbsEngine } from "express-handlebars";

// Importando la configuración de Vite
import { registerViteHelper } from "./vite.js";

// creando constantes de rutas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Exportar la función de configuración
export function configureHandlebars(app) {
  // Configurando handlebars
  // Creo una instancia del view engine
  const exphbs = createHbsEngine({
    extname: ".hbs",
    defaultLayout: "main",
  });

  // Registrando helpers de Vite
  registerViteHelper(exphbs.handlebars);

  // Integrando Hbs al server

  // 1. Registrando el motor de plantillas
  // SOLUCIÓN: Agregamos .engine al final de exphbs
  app.engine(".hbs", exphbs.engine);

  // 2. establezco extensión para las vistas
  app.set("view engine", ".hbs"); // Te recomiendo poner el punto ".hbs" aquí para evitar bugs

  // 3. Establezco directorio de vistas
  // SOLUCIÓN: Cambiamos path() por path.join()
  app.set("views", path.join(__dirname, "..", "views"));
}
