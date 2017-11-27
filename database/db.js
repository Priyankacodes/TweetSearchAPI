const mysql = require('mysql');

module.exports = { 

	dbConnection: mysql.createConnection({
	  user: 'root',
	  database: 'tweetDb'
	})

}