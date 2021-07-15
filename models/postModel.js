let posts = require('../data/posts')

const { writeDataToFile, incrementedId } = require('../utils')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(posts)
  })
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const post = posts.find((u) => u.id === id)
    resolve(post)
  })
}

function create(post) {
  return new Promise((resolve, reject) => {
    const newPost = {id: incrementedId(posts), ...post}
    posts.push(newPost)
    writeDataToFile('./data/posts.json', posts)
    resolve(newPost)
  })
}


function update(id, post) {
  return new Promise((resolve, reject) => {
    const index = posts.findIndex((u) => u.id === id)
    posts[index] = {id, ...post}
    writeDataToFile('./data/posts.json', posts)
    resolve(posts[index])
  })
}

function remove(id) {
  return new Promise((resolve, reject) => {
    posts = posts.filter((u) => u.id !== id)
    writeDataToFile('./data/posts.json', posts)
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