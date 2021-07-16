const myUser = require('../../classes/user')
const myUpdatedUser = require('../../classes/user')


module.exports = {

    getAllUsers() {
      let sql = "SELECT * FROM user"
      let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
      })
    },

    getUserById(id) {
      let sql = `SELECT * FROM user WHERE id = ${id}`
      let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
      })
    },

    createUser(){
      let userData = {email:myUser.email, password:myUser.password, birthDate:myUser.birthDate}
      let sql = `INSERT INTO user SET ?`
      let query = db.query(sql, userData, (err, result) => {
        if (err) throw err;
        console.log(result)
      })
    },

    updateUser(id) {
      let updatedUserData = {email:myUpdatedUser.email, password:myUpdatedUser.password, birthdate:myUpdatedUser.birthDate}
      let sql = `UPDATE user SET email = ${newUser.email} SET ? WHERE id = ${id}`
      let query = db.query(sql, updatedUserData, (err, result) => {
        if (err) throw err;
        console.log(result)
      })
    },

    deleteUserById(id) {
      let sql = `DELETE FROM user WHERE id = ${id}`
      let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
      })
    }

}