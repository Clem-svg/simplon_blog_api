const myUser = require('./user')
const myTopic = require('./topic')

class Post {

  constructor(id, postDate,  content, userID, topicID){
    this.id = id
    this.postDate = postDate
    this.content = content
    this.userID = userID
    this.topicID = topicID

  }
}

const myDate = new Date("July 17, 2021 03:24:00");


const myPost = new Post(id=1, postDate=myDate, content="my content", userID=myUser.id, topicID=myTopic.id )
const myUpdatedPost = new Post(id=myPost.id, postDate=myPost.date, content="my updated content", userID=myUser.id, topicID=myTopic.id )


module.exports = {
  myPost,
  myUpdatedPost,
  Post
};