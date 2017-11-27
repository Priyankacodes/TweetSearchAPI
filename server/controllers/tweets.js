const models = require('../models/tweets');
const utils = require('../utils');

module.exports = {
    search: function (req, res) { // a function which handles a search request for tweets
        const queryParameters = req.query;
        const fields = utils.queryBuilder(queryParameters);
        if (!fields) {
            res.status(400).send('Invalid Parameters');
        } else {
            console.log('queryParameters', queryParameters.q)
            models.searchTweets(queryParameters.q)
                .then((data) => {
                    if (data.length > 0) {
                        console.log(data)
                        res.status(200).json(data);
                    } else {
                        res.status(404).send('No Data Found');
                    }
                    res.end();
                })
                .catch((err) => {
                    console.log('Error fetching data', err)
                    res.status(500).send('Internal Server Error');
                })
        }
    }
};