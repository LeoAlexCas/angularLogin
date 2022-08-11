const jwt = require('jsonwebtoken');
require('dotenv');

const verifyToken = (req, res, next) => {
    if(!req.headers.authorization) {
        res.status(401).send("Unauthorized requiest");
    };

    const token = req.headers.authorization.split(' ')[1];
    if(!token) {
        res.status(401).send("Unauthorized requiest");
    };

    const payload = jwt.verify(token, `${process.env.SECRET_WORD}`);
    req.userId = payload._id;

    next();
};

module.exports = verifyToken;