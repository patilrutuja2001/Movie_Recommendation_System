const mysql = require("mysql");
require("dotenv").config();

  const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  conn.connect((err) => {
    if (err) {
      console.log("Database not connected:", err.message);
    } else {
      console.log("Database connected");
    }
  });
module.exports=conn;