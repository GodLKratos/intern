const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'mydb'
  });

  connection.connect((err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('database connected ');
  });

  



  module.exports = connection;