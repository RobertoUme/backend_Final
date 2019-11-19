const express = require("express");

const routes = express.Router();
const UserController = require("./controllers/UserController");
const ClienteController = require("./controllers/ClienteController");
const ServiceController = require("./controllers/ServiceController");
const SessionController = require("./controllers/SessionController");
const authMiddleware = require("./middlewares/auth");

routes.post("/u", UserController.store);
routes.post("/usuario", UserController.store);
routes.get("/usuario", UserController.list);
routes.get("/usuario/:email", UserController.index);
routes.put("/usuario/:email", UserController.update);


routes.post("/sessions", SessionController.store);

routes.post("/c", ClienteController.store);
routes.post("/cliente", ClienteController.store);
routes.get("/cliente", ClienteController.list);
routes.get("/cliente/:id", ClienteController.index);
routes.put("/cliente/:id", ClienteController.update);
routes.delete("/cliente/:id", ClienteController.destroy);

routes.post("/se", ServiceController.store);
routes.post("/service", ServiceController.store);
routes.get("/service", ServiceController.list);
routes.get("/service/:id", ServiceController.index);
routes.put("/service/:id", ServiceController.update);
routes.delete("/service/:id", ServiceController.destroy);

routes.use(authMiddleware);
routes.delete("/usuario/:id", UserController.destroy);
routes.get("teste", (req, res) => res.json({ok:true}));
module.exports = routes;
