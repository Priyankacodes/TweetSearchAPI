const Promise = require('bluebird');
const db = require('../../database/db');

let connection = false;

module.exports = {
   searchTweets: (fields) => {
       return new Promise (
           (resolve, reject) => {
               let queryString = `SELECT created_at, text, user_id
     	                   FROM tweets 
                            WHERE text LIKE ?`;
                            //ORDER BY created_at DESC`;
               let queryArgs = ['%' + fields + '%'];

               console.log('queryArgs', queryArgs)

               if (connection === false) {
                   db.dbConnection.connect();
                   connection = true;
               }

               db.dbConnection.query(queryString, queryArgs, function (err, results) {
                   if (err) {
                       console.log(err)
                       reject(err);
                   } else {
                       resolve(JSON.parse(JSON.stringify(results)));
                   }

               });
        })	
    }
};