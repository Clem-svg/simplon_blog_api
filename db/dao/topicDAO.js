const myTopic = require('../../classes/user')
const myUpdatedTopic = require('../../classes/user')


module.exports = {

  getAllTopics() {
    let sql = "SELECT * FROM topic"
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result)
    })
  },

  getTopicById(id) {
    let sql = `SELECT * FROM topic WHERE id = ${id}`
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result)
    })
  },

  createTopic(){
    let topicData = {title: myTopic.title, category_id: myTopic.categoryID, user_id: myTopic.User}
    let sql = `INSERT INTO topic SET ?`
    let query = db.query(sql, topicData, (err, result) => {
      if (err) throw err;
      console.log(result)
    })
  },

  updateTopicById(id) {
    let updatedTopicData = {title: myUpdatedTopic.title, category_id: myUpdatedTopic.categoryID, user_id: myUpdatedTopic.User}
    let sql = `UPDATE topic SET ? WHERE id = ${id}`
    let query = db.query(sql, updatedTopicData, (err, result) => {
      if (err) throw err;
      console.log(result)
    })
  },

  deleteTopicById(id) {
    let sql = `DELETE FROM topic WHERE id = ${id}`
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result)
    })
  }

}
