const LibraryService = require("../../entities/services/library");
const handleLibraries = new LibraryService();

const createLibrary = async (req, res) => {
  const { body } = req;
  const result = await handleLibraries.createLibrary(body);
  res.json(result);
};

const getLibraryById = async (req, res) => {
  const { id } = req.params;
  const result = await handleLibraries.getLibraryById(id);
  res.json(result);
};

const getAllLibraries = async (req, res) => {
  const result = await handleLibraries.getAllLibraries();
  res.json(result);
};

const updateLibraryById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const result = await handleLibraries.updateLibraryById(id, body);
  res.json(result);
};

const deleteLibraryById = async (req, res) => {
  const { id } = req.params;
  const result = await handleLibraries.deleteLibraryById(id);
  res.json(result);
};

module.exports = {
  createLibrary,
  getLibraryById,
  getAllLibraries,
  updateLibraryById,
  deleteLibraryById,
};
