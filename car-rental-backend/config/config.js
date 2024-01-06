const { User, Owner } = require("../models/model");

const protectGetOwner = async (req, res, next) => {
    let email;
    if (req.headers && req.headers.authorization) {
        email = req.headers.authorization;
        const data = await Owner.find({ email: email })
        if (data.length != 0) {
            req.owner = email;
            next();
        } else {
            res.send('email not found')
            return;
        }
    }
    else {
        res.send('no authorization')
    }
}

const protectGetUser = async (req, res, next) => {
    let email;
    if (req.headers && req.headers.authorization) {
        email = req.headers.authorization;
        const data = await User.find({ email: email })
        if (data.length != 0) {
            req.user = email;
            next();
        } else {
            res.send('email not found')
            return;
        }
    } else {
        res.send('no authorization')
    }
}

module.exports = { protectGetOwner, protectGetUser }