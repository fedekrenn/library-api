const express = require("express");

const {
  createLibrary,
  getLibraryById,
  getAllLibraries,
  updateLibraryById,
  deleteLibraryById,
} = require("../controllers/library");

const { Router } = express;
const routerLibrary = Router();
const { isLogged } = require("../middlewares/auth");

/* ---------- GET ------------ */

routerLibrary.get("/", getAllLibraries);
routerLibrary.get("/:id", getLibraryById);

/* ---------- POST ------------ */

routerLibrary.post("/", isLogged, createLibrary);

/* ---------- PUT ------------ */

routerLibrary.put("/:id", isLogged, updateLibraryById);

/* ---------- DELETE ------------ */

routerLibrary.delete("/:id", isLogged, deleteLibraryById);

module.exports = routerLibrary;
