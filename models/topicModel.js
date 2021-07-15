let topics = require('../data/topics')
let posts = require('../data/posts')


const { writeDataToFile, incrementedId } = require('../utils')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(topics)
  })
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const topic = topics.find((t) => t.id === id)
    resolve(topic)
  })
}

function create(topic) {
  return new Promise((resolve, reject) => {
    const newTopic = {id: incrementedId(topics), ...topic}
    topics.push(newTopic)
    writeDataToFile('./data/topics.json', topics)
    resolve(newTopic)
  })
}


function update(id, topic) {
  return new Promise((resolve, reject) => {
    const index = topics.findIndex((t) => t.id === id)
    topics[index] = {id, ...topic}
    writeDataToFile('./data/topics.json', topics)
    resolve(topics[index])
  })
}

function remove(id) {
  return new Promise((resolve, reject) => {
    topics = topics.filter((t) => t.id !== id)
    posts = posts.filter((p) => p.topicID !== id)

    writeDataToFile('./data/topics.json', topics)
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