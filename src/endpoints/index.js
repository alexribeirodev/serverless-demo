export function handler(event, context, callback) {
    return callback(null, JSON.stringify({
        message: 'Hello World!'
    }))
}