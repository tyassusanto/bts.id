const connection = require('../../common/connection')

const findUsername = (username) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users WHERE username = ?`
        connection.query(query, username, (error, result) => {
            if(!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}
module.exports = {
    findUsername,
}