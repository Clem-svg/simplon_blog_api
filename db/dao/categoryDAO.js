const myCategory = require('../../classes/user')
const myUpdatedCategory = require('../../classes/user')


module.exports = {

  getAllCategories() {
    let sql = "SELECT * FROM category"
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result)
    })
  },

  getCategoryById(id) {
    let sql = `SELECT * FROM category WHERE id = ${id}`
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result)
    })
  },

  createCategory(){
    let categoryData = {label: myCategory.label}
    let sql = `INSERT INTO category SET ?`
    let query = db.query(sql, categoryData, (err, result) => {
      if (err) throw err;
      console.log(result)
    })
  },

  updateCategoryById(id) {
    let updatedCategoryData = {label: myUpdatedCategory.label}
    let sql = `UPDATE category SET ? WHERE id = ${id}`
    let query = db.query(sql, updatedCategoryData, (err, result) => {
      if (err) throw err;
      console.log(result)
    })
  },

  deleteCategoryById(id) {
    let sql = `DELETE FROM category WHERE id = ${id}`
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result)
    })
  }

}
