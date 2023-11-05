import "dotenv/config.js";
// Server Model: Contiene todo el servidor de express + socket.io configurado
import Server from "./models/server.js";

// Paquete para leer y establecer las variables de entorno
// import "dotenv/config";

// Inicializar la instancia del server
const server = new Server();

// Ejecutar el server
server.execute();
