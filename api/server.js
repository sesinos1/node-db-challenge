const express = require("express");
const helmet = require("helmet");
//const projectsRouter = require("../routers/project-router");
//const actionsRouter = require("../control/actionsrouter.js");
//const actionsRouter = require("../control/actionsrouter.js");
const server = express();

server.get("/", (req, res) => {
	res.send(`<h2>NodeDB Sprint Challenge</h2>`);
});

server.use(helmet());
server.use(express.json());
//server.use("/api/projects", projectsRouter);
//server.use("/api/actions", actionsRouter);
//server.use("/api/actions", actionsRouter);

module.exports = server; 