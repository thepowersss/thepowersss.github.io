var mysql = require('mysql');

var con = mysql.createConnection({
  host: "140.82.49.189",
  user: "guestuser",
  password: "password"
  database: "simp_notes"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to jame server!");
});

con.query('SELECT *', function(error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
});

con.end();