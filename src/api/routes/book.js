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

/* ---------- GET ------------ */

routerBook.get("/", getBooks);
routerBook.get("/:id", getBookById);

/* ---------- POST ------------ */

routerBook.post("/", createBook);

/* ---------- PUT ------------ */

routerBook.put("/:id", updateBookById);

/* ---------- DELETE ------------ */

routerBook.delete("/:id", deleteBookById);

module.exports = routerBook;
