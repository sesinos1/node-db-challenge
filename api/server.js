const express = require("express");
const helmet = require("helmet");
const projectsRouter = require("../routers/project-router");
const taskRouter = require("../routers/task-router");
const resourceRouter = require("../routers/resource-router.js");
const server = express();

server.get("/", (req, res) => {
	res.send(`<h2>NodeDB Sprint Challenge</h2>`);
});

server.use(helmet());
server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/task", taskRouter);
server.use("/api/resource", resourceRouter);

module.exports = server; 