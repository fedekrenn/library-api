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

/* ---------- GET ------------ */
routerLibrary.get("/", getAllLibraries);
routerLibrary.get("/:id", getLibraryById);

/* ---------- POST ------------ */

routerLibrary.post("/", createLibrary);

/* ---------- PUT ------------ */

routerLibrary.put("/:id", updateLibraryById);

/* ---------- DELETE ------------ */

routerLibrary.delete("/:id", deleteLibraryById);

module.exports = routerLibrary;
