const Category = require('../models/categoryModel')

const { getData } = require('../utils')

// @description Gets All Categories
// @route GET /api/categories
async function getCategories(req, res) {
  try {
    const categories = await Category.findAll()

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(categories))
  } catch (error) {
    console.log(error)
  }
}


// @description Gets Single Category
// @route GET /api/categories/:id
async function getCategory(req, res, id) {
  try {
    const category = await Category.findById(id)

    if(!category) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'Category Not Found'}))
    } else {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(category))
    }

  } catch (error) {
    console.log(error)
  }
}

// @description Creates a category
// @route POST /api/categories
async function createCategory(req, res) {
  try {

    const body = await getData(req)

    const { label } = JSON.parse(body)

    const category = {
      label
    }

    const newCategory = await Category.create(category)

    res.writeHead(201, {'Content-Type': 'application/json'})
    return res.end(JSON.stringify(newCategory))

  } catch (error) {
    console.log(error)
  }
}

// @description Updates a category
// @route PUT /api/categories/:id
async function updateCategory(req, res, id) {
  try {

    const category = await Category.findById(id)

    if(!category){
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'Category Not Found'}))
    } else {
      const body = await getData(req)

      const { label } = JSON.parse(body)

      const categoryData = {
        label : label || category.label,
      }

      const updatedCategory = await Category.update(id, categoryData)

      res.writeHead(200, {'Content-Type': 'application/json'})
      return res.end(JSON.stringify(updatedCategory))

    }

  } catch (error) {
    console.log(error)
  }
}

// @description Deletes Single Category
// @route DELETE /api/category/:id
async function deleteCategory(req, res, id) {
  try {
    const category = await Category.findById(id)

    if(!category) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'Category Not Found'}))
    } else {
      await Category.remove(id)
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: `Category ${id} removed `}))
    }

  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
}