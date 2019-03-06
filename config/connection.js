// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "q68u8b2buodpme2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "rwk294ryl9yoqe3ob",
  password: "c243ulzj4zd3dy27",
  database: "jjxae5zehzftpwzy"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
