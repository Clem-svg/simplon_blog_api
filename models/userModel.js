let users = require('../data/users')
let topics = require('../data/topics.json')
let posts = require('../data/posts.json')

const { writeDataToFile, incrementedId } = require('../utils')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(users)
  })
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === id)
    resolve(user)
  })
}

function create(user) {
  return new Promise((resolve, reject) => {
    const newUser = new User
    const newUser = {id: incrementedId(users), ...user}
    users.push(newUser)
    writeDataToFile('./data/users.json', users)
    resolve(newUser)
  })
}


function update(id, user) {
  return new Promise((resolve, reject) => {
    const index = users.findIndex((u) => u.id === id)
    users[index] = {id, ...user}
    writeDataToFile('./data/users.json', users)
    resolve(users[index])
  })
}

function remove(id) {
  return new Promise((resolve, reject) => {
    users = users.filter((u) => u.id !== id)
    topics = topics.filter((t) => t.userID !== id)
    posts = posts.filter((p) => p.userID !== id)

    writeDataToFile('./data/users.json', users)
    writeDataToFile('./data/topics.json', topics)
    writeDataToFile('./data/posts.json', topics)

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