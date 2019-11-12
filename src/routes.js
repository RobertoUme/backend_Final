const express = require("express");

const routes = express.Router();
const UserController = require("./controllers/UserController");
const CommerceController = require("./controllers/CommerceController");
const QuoteController = require("./controllers/QuoteController");
const SessionController = require("./controllers/SessionController");
const authMiddleware = require("./middlewares/auth");

routes.post("/u", UserController.store);
routes.post("/usuario", UserController.store);
routes.get("/usuario", UserController.list);
routes.get("/usuario/:email", UserController.index);
routes.put("/usuario/:email", UserController.update);


routes.post("/sessions", SessionController.store);

routes.post("/c", CommerceController.store);
routes.post("/comercio", CommerceController.store);
routes.get("/comercio", CommerceController.list);
routes.get("/comercio/:id", CommerceController.index);
routes.put("/comercio/:id", CommerceController.update);
routes.delete("/comercio/:id", CommerceController.destroy);

routes.post("/co", QuoteController.store);
routes.post("/cotacao", QuoteController.store);
routes.get("/cotacao", QuoteController.list);
routes.get("/cotacao/:id", QuoteController.index);
routes.put("/cotacao/:id", QuoteController.update);
routes.delete("/cotacao/:id", QuoteController.destroy);

routes.use(authMiddleware);
routes.delete("/usuario/:id", UserController.destroy);
routes.get("teste", (req, res) => res.json({ok:true}));
module.exports = routes;
