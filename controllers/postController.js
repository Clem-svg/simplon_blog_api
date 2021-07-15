const Post = require('../models/postModel')

const { getData } = require('../utils')

// @description Gets All Posts
// @route GET /api/posts
async function getPosts(req, res) {
  try {
    const posts = await Post.findAll()

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(posts))
  } catch (error) {
    console.log(error)
  }
}


// @description Gets Single Post
// @route GET /api/posts/:id
async function getPost(req, res, id) {
  try {
    const post = await Post.findById(id)

    if(!post) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'Post Not Found'}))
    } else {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(post))
    }

  } catch (error) {
    console.log(error)
  }
}

// @description Creates a post
// @route POST /api/posts
async function createPost(req, res) {
  try {

    const body = await getData(req)

    const { postDate, content, userID, topicID } = JSON.parse(body)

    const post = {
      postDate,
      content,
      userID,
      topicID
    }

    const newPost = await Post.create(post)

    res.writeHead(201, {'Content-Type': 'application/json'})
    return res.end(JSON.stringify(newPost))

  } catch (error) {
    console.log(error)
  }
}

// @description Updates a post
// @route PUT /api/posts/:id
async function updatePost(req, res, id) {
  try {

    const post = await Post.findById(id)

    if(!post){
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'Post Not Found'}))
    } else {
      const body = await getData(req)

      const { postDate, content, userID, topicID } = JSON.parse(body)

      const postData = {
        postDate : postDate || post.postDate,
        content : content || post.content,
        userID : userID || post.updatedPost,
        topicID : topicID || post.topicID
      }

      const updatedPost = await Post.update(id, postData)

      res.writeHead(200, {'Content-Type': 'application/json'})
      return res.end(JSON.stringify(updatedPost))

    }

  } catch (error) {
    console.log(error)
  }
}

// @description Deletes Single Post
// @route DELETE /api/post/:id
async function deletePost(req, res, id) {
  try {
    const post = await Post.findById(id)

    if(!post) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'Post Not Found'}))
    } else {
      await Post.remove(id)
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: `Post ${id} removed `}))
    }

  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
}