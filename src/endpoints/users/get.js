const User = require('../../models/user')

async function handler(event, context, callback) {
    try {
        const {
            pathParameters: {
                id
            }
        } = event

        const response = await User.get(id)

        if(!response) {
            return callback(null, {
                statusCode: 204
            })
        }

        return callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                message: 'User found!',
                body: response
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