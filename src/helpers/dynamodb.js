const dynamodb = require('dynamodb')

let options = {
    region: process.env.REGION
}

if (process.env.STAGE == 'local') {
    options = {
        ...options,
        region: 'localhost',
        endpoint: 'http://localhost:8000',
    }
}

dynamodb.AWS.config.update(options)

module.exports = dynamodb