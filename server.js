const express = require('express');
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connects the database to the localhost
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
  });

//Runs a query in the database and console logs the results
db.query('SELECT * FROM employees', function (err, results) {
  console.log(results);
});

//Sends back an error code at the end Default response for any  t
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
