require("dotenv").config();

const { Client } = require("pg");
const client = new Client(process.env.PG_URL);

client.connect();

// const query = "SELECT name FROM promo ORDER BY name ASC";

client.query(query,(error,results) => {
  if(error){
    console.trace(error);
  } else {
    console.log(results.rows);
  }
});