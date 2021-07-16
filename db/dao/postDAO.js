const myPost = require('../../classes/post')
const myUpdatedPost = require('../../classes/post')


module.exports = {

    getAllPosts() {
      let sql = "SELECT * FROM post"
      let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
      })
    },

    getPostById(id) {
      let sql = `SELECT * FROM post WHERE id = ${id}`
      let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
      })
    },

    createPost(){
      let postData = {postdate:myPost.postDate, content:myPost.content, user_id:myPost.userID, topic_id:myPost.topicID}
      let sql = `INSERT INTO post SET ?`
      let query = db.query(sql, postData, (err, result) => {
        if (err) throw err;
        console.log(result)
      })
    },

    updatePost(id) {
      let updatedPostData = {postdate:myUpdatedPost.postDate, content:myUpdatedPost.content, user_id:myUpdatedPost.userID, topic_id:myUpdatedPost.topicID}
      let sql = `UPDATE post SET email = ${newPost.email} SET ? WHERE id = ${id}`
      let query = db.query(sql, updatedPostData, (err, result) => {
        if (err) throw err;
        console.log(result)
      })
    },

    deletePostById(id) {
      let sql = `DELETE FROM post WHERE id = ${id}`
      let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
      })
    }

}