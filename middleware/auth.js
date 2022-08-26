const verifyUser = (req, res, next) => {
    if (req.headers.username === 'ares' && req.headers.password === 'bocahnakal') {
        next()
    } else {
        res.send(401)
    }
}

const auth = { verifyUser }

module.exports = auth