const express = require("express");

const {
  createBook,
  getBookById,
  getBooks,
  updateBookById,
  deleteBookById,
} = require("../controllers/book");

const { Router } = express;
const routerBook = Router();

const { isLogged } = require("../middlewares/auth");

/* ---------- GET ------------ */

routerBook.get("/", getBooks);
routerBook.get("/:id", getBookById);

/* ---------- POST ------------ */

routerBook.post("/", isLogged, createBook);

/* ---------- PUT ------------ */

routerBook.put("/:id", isLogged, updateBookById);

/* ---------- DELETE ------------ */

routerBook.delete("/:id", isLogged, deleteBookById);

module.exports = routerBook;
