const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const verifToken = (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    } else {
        return res.status(403).json({ error: 'Token dibutuhkan' })
    }
    try {
        const secretKey = 'kmzway87aa'
        const decoded = jwt.verify(token, secretKey)
        req.username = decoded.username
        next()
    } catch (err) {
        console.log(err)
    }
}



module.exports = {
    verifToken,
}