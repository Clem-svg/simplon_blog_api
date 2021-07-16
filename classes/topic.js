const myUser = require('./user')
const myCategory = require('./category')

class Topic {
  constructor(id,  title, categoryID, userID) {
    this.id = id
    this.title = title
    this.userID = userID
    this.categoryID = categoryID
  }
}

const myTopic = new Topic(id=1, title="How to pick the perfect avocado ?", userID=myUser.id, categoryID=myCategory.id )
const myTopic = new Topic(id=1, title="Avocado?", userID=myUser.id, categoryID=myCategory.id )


module.exports = {
  myTopic,
  myUpdatedTopic,
  User
};