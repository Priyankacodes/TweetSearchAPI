# TweetSearchAPI

Tweet Search API using Node.js, Express, React

################################

Loading the Data

From project folder: 
$ mysql -u root < database/schema.mssql;
$ mysql -u root --local-infile=1

mysql> use tweetDB;
mysql> LOAD DATA LOCAL INFILE 'database/data.txt' INTO TABLE tweets FIELDS TERMINATED BY '\t' LINES TERMINATED BY '\n' IGNORE 1 LINES (created_at, text, user_id);

################################

Running the App

To install dependencies: npm install

To start server: npm start

To run build: npm run build

################################

API Status code

200 - Valid query

400 - Invalid parameters

404 - No Data Found for the query

500 - Internal Server Error

################################

Some more Enhancements

- Pagination and add limit to records returned
- Authentication using Passport.js
- Ordering of the dataset
