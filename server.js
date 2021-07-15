const http = require('http')

const { getUsers, getUser, createUser, updateUser, deleteUser } = require('./controllers/userController')
const { getCategories, getCategory, createCategory, updateCategory, deleteCategory } = require('./controllers/categoryController')
const { getTopics, getTopic, createTopic, updateTopic, deleteTopic } = require('./controllers/topicController')
const { getPosts, getPost, createPost, updatePost, deletePost } = require('./controllers/postController')


const server = http.createServer((req, res) => {
  if(req.url === '/api/users' && req.method === 'GET') {
      getUsers(req, res)
  } else if( req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
      const id = parseInt(req.url.split('/')[3])
      getUser(req, res, id)
  } else if (req.url === '/api/users' && req.method === 'POST'){
      createUser(req, res)
  } else if( req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'PUT') {
      const id = parseInt(req.url.split('/')[3])
      updateUser(req, res, id)
  } else if( req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'DELETE') {
      const id = parseInt(req.url.split('/')[3])
      deleteUser(req, res, id)
  }

  else if (req.url === '/api/categories' && req.method === 'GET') {
    getCategories(req, res)

  } else if( req.url.match(/\/api\/categories\/([0-9]+)/) && req.method === 'GET') {
      const id = parseInt(req.url.split('/')[3])
      getCategory(req, res, id)
  } else if (req.url === '/api/categories' && req.method === 'POST'){
      createCategory(req, res)
  } else if( req.url.match(/\/api\/categories\/([0-9]+)/) && req.method === 'PUT') {
      const id = parseInt(req.url.split('/')[3])
      updateCategory(req, res, id)
  } else if( req.url.match(/\/api\/categories\/([0-9]+)/) && req.method === 'DELETE') {
      const id = parseInt(req.url.split('/')[3])
      deleteCategory(req, res, id)
  }

  else if (req.url === '/api/topics' && req.method === 'GET') {
    getTopics(req, res)

  } else if( req.url.match(/\/api\/topics\/([0-9]+)/) && req.method === 'GET') {
      const id = parseInt(req.url.split('/')[3])
      getTopic(req, res, id)
  } else if (req.url === '/api/topics' && req.method === 'POST'){
      createTopic(req, res)
  } else if( req.url.match(/\/api\/topics\/([0-9]+)/) && req.method === 'PUT') {
      const id = parseInt(req.url.split('/')[3])
      updateTopic(req, res, id)
  } else if( req.url.match(/\/api\/topics\/([0-9]+)/) && req.method === 'DELETE') {
      const id = parseInt(req.url.split('/')[3])
      deleteTopic(req, res, id)
  }


  else if (req.url === '/api/posts' && req.method === 'GET') {
    getPosts(req, res)

  } else if( req.url.match(/\/api\/posts\/([0-9]+)/) && req.method === 'GET') {
      const id = parseInt(req.url.split('/')[3])
      getPost(req, res, id)
  } else if (req.url === '/api/posts' && req.method === 'POST'){
      createPost(req, res)
  } else if( req.url.match(/\/api\/posts\/([0-9]+)/) && req.method === 'PUT') {
      const id = parseInt(req.url.split('/')[3])
      updatePost(req, res, id)
  } else if( req.url.match(/\/api\/posts\/([0-9]+)/) && req.method === 'DELETE') {
      const id = parseInt(req.url.split('/')[3])
      deletePost(req, res, id)
  }

  else {
      res.writeHead(404, {'Content-Type': 'application/json'})
      res.end(JSON.stringify({ message: 'Route Not Found'}))
  }

})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on ${PORT}`))