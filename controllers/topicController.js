const Topic = require('../models/topicModel')

const { getData } = require('../utils')

// @description Gets All Topics
// @route GET /api/topics
async function getTopics(req, res) {
  try {
    const topics = await Topic.findAll()

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(topics))
  } catch (error) {
    console.log(error)
  }
}


// @description Gets Single Topic
// @route GET /api/topics/:id
async function getTopic(req, res, id) {
  try {
    const topic = await Topic.findById(id)

    if(!topic) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'Topic Not Found'}))
    } else {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(topic))
    }

  } catch (error) {
    console.log(error)
  }
}

// @description Creates a topic
// @route POST /api/topics
async function createTopic(req, res) {
  try {

    const body = await getData(req)

    const { title, userID, categoryID } = JSON.parse(body)

    const topic = {
      title,
      userID,
      categoryID
    }

    const newTopic = await Topic.create(topic)

    res.writeHead(201, {'Content-Type': 'application/json'})
    return res.end(JSON.stringify(newTopic))

  } catch (error) {
    console.log(error)
  }
}

// @description Updates a topic
// @route PUT /api/topics/:id
async function updateTopic(req, res, id) {
  try {

    const topic = await Topic.findById(id)

    if(!topic){
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'Topic Not Found'}))
    } else {
      const body = await getData(req)

      const { title, userID, categoryID } = JSON.parse(body)

      const topicData = {
        title : title || topic.title,
        userID : userID || topic.userID,
        categoryID : categoryID || topic.categoryID
      }

      const updatedTopic = await Topic.update(id, topicData)

      res.writeHead(200, {'Content-Type': 'application/json'})
      return res.end(JSON.stringify(updatedTopic))

    }

  } catch (error) {
    console.log(error)
  }
}

// @description Deletes Single Topic
// @route DELETE /api/topic/:id
async function deleteTopic(req, res, id) {
  try {
    const topic = await Topic.findById(id)

    if(!topic) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'Topic Not Found'}))
    } else {
      await Topic.remove(id)
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: `Topic ${id} removed `}))
    }

  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  getTopics,
  getTopic,
  createTopic,
  updateTopic,
  deleteTopic
}