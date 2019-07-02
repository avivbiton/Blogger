
module.exports = (req, res, next) => {
    const key = req.headers.key;
    if(key !== process.env.SECRET_KEY) {
        return res.status(401).send("Unauthorized.");
    }
    next();
}