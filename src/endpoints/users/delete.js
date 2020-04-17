const uuid = require('uuid')

const User = require('../../models/user')

async function handler(event, context, callback) {
    try {
        const {
            pathParameters: {
                id
            }
        } = event

        await User.destroy(id)

        return callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                message: 'User deleted!'
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