const auth = (req, res, next) => {
    let aut = false
    aut ?
        next() :
        res.send("do not have a permission. Sorry!")
}
module.exports = auth