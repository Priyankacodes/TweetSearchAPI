module.exports = {
    queryBuilder: (queryParameters) => {
        let fields = {
            parameters: queryParameters,
            limit: 5 //default limit to 5
        }

        let validParameter = true;

        return fields;
    }
}