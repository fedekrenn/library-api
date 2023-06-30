const { libraryService } = require('../../entities/services/index')

const createLibrary = async (req, res) => {
  const { body: librarydata } = req

  const result = await libraryService.createLibrary(librarydata)
  res.json(result)
}

const getLibraryById = async (req, res) => {
  const { id } = req.params

  const result = await libraryService.getLibraryById(id)
  res.json(result)
}

const getAllLibraries = async (req, res) => {
  const result = await libraryService.getAllLibraries()
  res.json(result)
}

const updateLibraryById = async (req, res) => {
  const { id } = req.params
  const { body: librarydata } = req

  const result = await libraryService.updateLibraryById(id, librarydata)
  res.json(result)
}

const deleteLibraryById = async (req, res) => {
  const { id } = req.params

  const result = await libraryService.deleteLibraryById(id)
  res.json(result)
}

module.exports = {
  createLibrary,
  getLibraryById,
  getAllLibraries,
  updateLibraryById,
  deleteLibraryById,
}
