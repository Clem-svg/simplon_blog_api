const http = require('http')

var mysql = require("mysql");

  const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'UserExt',
    password : '@4/L2C!1.]ua(nx2',
    database : 'simplon_DA',
    port : 3007,
    socketPath: "/var/run/mysqld/mysqld.sock"
  });

db.connect((err) => {
  if(err){
   console.log(err)
  }
  console.log("MySql connected")
})

const server = http.createServer((req, res) => {
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Server running on ${PORT}`))