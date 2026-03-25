# 🟩 Node 
 
[Node] (https://nodejs.org/es) es un entorno de ejeccución multiplataforma de codigo abierto y gratis.

Dentro de los frameworks para crear servidores web para Node tenemos: 

- [Fastify](https://fastify.dev/)
- [AdonisJs](https://adonisjs.com/)
- [Nestjs](https://nestjs.com/)
- [Koa](https://koajs.com/)
- [ExpressJs](https://expressjs.com/)

# ☕ExpressJs

Express es un _framework_ para Node,
minimo, flexible no es impositivo tanto
en el flujo de trabajo como en la 
arquitectura del proyecto.

El presente proyecto está desarrollado en ExpressJs

# 📦 ESM 

Los ECMAScrip Modules (ESM) representan el estándar nativo
para organizar y modularizar código de Javascript.
El express-generator genera un proyecto usando el antiguo
estandar llamado _CommonJS_ que usa las sentencias `require`
el nuevo estándar llamado usa `export/import`.

Migrar a ESM ofrece las siguientes ventajas:

- Sintaxis  moderna y consistente
- Mejor análisis estático
- Importaciones asíncronas con `import()`
- Es el futuro del ecosistema.

# 😈 Nodemon

[Nodemon] (https://nodemon.io/) es un paquete que actua como
un _wrapper_ (envoltorio) para Node.Js
Su función es observar archivos en el 
directorio de tu proyecto y reiniciar
automaticamente la aplicación cuando
detecta cambios guardados.

# ✂️ Aliases

Los **imports alisases** también conocidos como _path aliases_ o _module aliases_ 
son atajos o alias que podemos configurar para simplificar la forma en que importamos
modulos en que importamos modulos en nuestra aplicación.

# Tarea 
mover los siguientes archivos y directorios al directorio
_server_:
* 📁 bin
* 📁 routes
* 📁 views
* 📄 app.js