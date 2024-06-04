const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "newProducts", // Use the name of the database you created
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to the database as ID " + connection.threadId);
});

const getUsers = () => {
  connection.query("SELECT * FROM users", (error, results) => {
    if (error) {
      console.error("Error fetching users from the database: " + error.stack);
      return "error";
    }
    console.log("data", results);
    // Send the fetched data as a response
    return results;
  });
};

module.exports = {
  getUsers,
};
