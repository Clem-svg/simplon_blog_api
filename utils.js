const fs = require('fs')
const users = require('./data/users.json')


function writeDataToFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
    if(error) {
      console.log(err)
    }
  })
}

function incrementedId(array) {
  var lastId = array[array.length - 1].id
  return lastId + 1
}

function getData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = ''

      req.on('data', (chunk) => {
        body += chunk.toString()
      })

      req.on('end', () => {
        resolve(body)
      })
    } catch (error) {
      reject(err)
    }
  })
}

module.exports = {
  writeDataToFile,
  incrementedId,
  getData
}
