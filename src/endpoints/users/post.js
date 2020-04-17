const uuid = require('uuid')

const User = require('../../models/user')

async function handler(event, context, callback) {
    try {
        const requestBody = JSON.parse(event.body)
        const {
            name
        } = requestBody

        if (!name) {
            return callback(new Error('Parameter name is required!'));
        }

        let validUser = await User.scan().where('name').eq(name).exec().promise()

        console.log(validUser[0].Items[0])

        if(validUser && validUser[0].Count > 0) {
            return callback(null, {
                statusCode: 201,
                body: JSON.stringify({
                    message: 'User created!',
                    body: {
                        id: validUser[0].Items[0].get('id')
                    }
                }),
            })
        }

        const { attrs } = await User.create({
            id: uuid.v4(),
            name
        })

        return callback(null, {
            statusCode: 201,
            body: JSON.stringify({
                message: 'User created!',
                body: {
                    id: attrs.id
                }
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