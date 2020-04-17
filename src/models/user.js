const Joi = require('@hapi/joi')
const dynamodb = require('../helpers/dynamodb')

const User = dynamodb.define('User', {
    tableName: process.env.USERS_TABLE,
    hashKey: 'id',
    timestamps: true,
    schema: {
        id: dynamodb.types.uuid(),
        name: Joi.string().required(),
    },
})

module.exports = User