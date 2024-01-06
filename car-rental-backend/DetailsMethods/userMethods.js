const { User, Payment, Booking, Car } = require("../models/model");
//login
const authUserLogin = async (req, res) => {
    const { email, password } = req.body;
    const data = await User.find({ email: email });
    if (data.length != 0 && data[0].password === password) {
        res.send(data[0])
    } else {
        res.send("User not found")
    }
}
const authUserSignup = async (req, res) => {
    const { email } = req.body;
    const data = await User.find({ email: email });
    if (data.length === 0) {
        await User.insertMany(req.body).then((val) => {
            res.send('Successfully Registered')
        }).catch(err => {
            res.send('Error')
        })
    } else {
        res.send('User already exists')
    }
}
const UpdateBookings = async (req, res) => {
    Booking.insertMany({ owneremail: req.body.owneremail, useremail: req.body.useremail, details: req.body }).then((val) => {
        res.send('success')
    }).catch(err => {
        res.send('fail')
    })
}
const userBookings = async (req, res) => {
    const email = req.user
    if (email) {
        const data = await Booking.find({ useremail: email })
        res.send(data)
    } else {
        res.send('no auth')
    }
}
const UpdatePayments = async (req, res) => {
    Payment.insertMany({ owneremail: req.body.owneremail, useremail: req.body.useremail, details: req.body }).then((val) => {
        res.send('success')
    }).catch(err => {
        res.send('fail')
    })
}
const userPayments = async (req, res) => {
    const email = req.user
    if (email) {
        const data = await Payment.find({ useremail: email })
        res.send(data)
    } else {
        res.send('no auth')
    }
}

const allCars = async (req, res) => {
    try {
        const data = await Car.find({})
        res.send(data)
    } catch (error) {
        res.send('error')
    }

}
module.exports = { authUserLogin, authUserSignup, UpdatePayments, UpdateBookings, userPayments, allCars, userBookings }