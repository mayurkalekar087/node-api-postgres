const Express = require("express");
const controller = require("../controllers/controller");
const express = Express();

//Creating routes for CRUD operations
express.get("/",controller.getStudent);
express.get("/:id",controller.getStudentById);
express.post("/",controller.addStudent);
express.put("/:id",controller.updateStudent);
express.delete("/:id",controller.removeStudent);

module.exports = express;
