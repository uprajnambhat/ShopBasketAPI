const { getUsers } = require("../sqlPractice");
const connection = require("../db");

const getCartDetails = (req, res) => {
  console.log("reached here");
  const query = "SELECT * FROM products";

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query:", error.stack);
      res.status(500).send("Server Error");
      return;
    } 

    // Log the raw data packet for debugging
    console.log("Raw data packet:", results);

    // Process the results as needed
    res.json(results);
  });

  console.log("rcb", getUsers());
};

module.exports = {
  getCartDetails,
};
