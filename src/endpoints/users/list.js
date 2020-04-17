const User = require('../../models/user')

async function handler(event, context, callback) {
    try {
        const response = await User.scan().exec().promise()

        return callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                message: 'User list!',
                body: response[0].Items
            }),
        })
    } catch (err) {
        console.log(err)
        return callback(null, {
            statusCode: 500,
            body: JSON.stringify({
                message: err.message
            }),
        })
    }
}

module.exports = { handler }