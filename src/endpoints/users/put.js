const uuid = require('uuid')

const User = require('../../models/user')

async function handler(event, context, callback) {
    try {
        const {
            body,
            pathParameters: {
                id
            }
        } = event

        const requestBody = JSON.parse(body)

        const user = await User.update({
            ...requestBody,
            id,
        })

        return callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                message: 'User updated!',
                body: user.get()
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