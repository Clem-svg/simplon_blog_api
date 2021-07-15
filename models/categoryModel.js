let categories = require('../data/categories')

const { writeDataToFile, incrementedId } = require('../utils')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(categories)
  })
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const category = categories.find((c) => c.id === id)
    resolve(category)
  })
}

function create(category) {
  return new Promise((resolve, reject) => {
    const newCategory = {id: incrementedId(categories), ...category}
    categories.push(newCategory)
    writeDataToFile('./data/categories.json', categories)
    resolve(newCategory)
  })
}


function update(id, category) {
  return new Promise((resolve, reject) => {
    const index = categories.findIndex((c) => c.id === id)
    categories[index] = {id, ...category}
    writeDataToFile('./data/categories.json', categories)
    resolve(categories[index])
  })
}

function remove(id) {
  return new Promise((resolve, reject) => {
    categories = categories.filter((c) => c.id !== id)
    writeDataToFile('./data/categories.json', categories)

    resolve()
  })
}



module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
}