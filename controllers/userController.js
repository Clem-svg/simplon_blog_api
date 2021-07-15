const User = require('../models/userModel')

const { getData } = require('../utils')

// @description Gets All Users
// @route GET /api/users
async function getUsers(req, res) {
  try {
    const users = await User.findAll()

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(users))
  } catch (error) {
    console.log(error)
  }
}


// @description Gets Single User
// @route GET /api/user/:id
async function getUser(req, res, id) {
  try {
    const user = await User.findById(id)

    if(!user) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'User Not Found'}))
    } else {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(user))
    }

  } catch (error) {
    console.log(error)
  }
}

// @description Creates a user
// @route POST /api/users
async function createUser(req, res) {
  try {

    const body = await getData(req)

    const { email, password, birthDate } = JSON.parse(body)

    const user = {
      email,
      password,
      birthDate
    }

    const newUser = await User.create(user)

    res.writeHead(201, {'Content-Type': 'application/json'})
    return res.end(JSON.stringify(newUser))

  } catch (error) {
    console.log(error)
  }
}

// @description Updates a user
// @route PUT /api/users/:id
async function updateUser(req, res, id) {
  try {

    const user = await User.findById(id)

    if(!user){
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'User Not Found'}))
    } else {
      const body = await getData(req)

      const { email, password, birthDate } = JSON.parse(body)

      const userData = {
        email : email || user.email,
        password : password || user.password,
        birthDate : birthDate || user.birthDate
      }

      const updatedUser = await User.update(id, userData)

      res.writeHead(200, {'Content-Type': 'application/json'})
      return res.end(JSON.stringify(updatedUser))

    }

  } catch (error) {
    console.log(error)
  }
}

// @description Deletes Single User
// @route DELETE /api/user/:id
async function deleteUser(req, res, id) {
  try {
    const user = await User.findById(id)

    if(!user) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'User Not Found'}))
    } else {
      await User.remove(id)
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: `User ${id} removed `}))
    }

  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}