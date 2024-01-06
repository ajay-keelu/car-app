const { Owner, Payment, Booking, Car } = require("../models/model");

//login
const authOwnerLogin = async (req, res) => {
    const { email, password } = req.body;
    const data = await Owner.find({ email: email });
    if (data.length != 0 && data[0].password === password) {
        res.send(data[0])
    } else {
        res.send("Email not found")
    }
}

//signup
const authOwnerSignUp = async (req, res) => {
    const { email } = req.body;
    const data = await Owner.find({ email: email });
    if (data.length === 0) {
        await Owner.insertMany(req.body).then((val) => {
            res.send('Successfully Registered')
        }).catch(err => {
            res.send(err)
        })
    } else {
        res.send('Owner already exists')
    }
}

const OwnerBookings = async (req, res) => {
    const email = req.owner
    if (email) {
        const data = await Booking.find({ owneremail: email })
        res.send(data)
    } else {
        res.send('no auth')
    }
}

const OwnerPayments = async (req, res) => {
    const email = req.owner;
    if (email) {
        const data = await Payment.find({ owneremail: email })
        res.send(data)
    } else {
        res.send('no auth')
    }
}

//add car

const addCar = async (req, res) => {
    Car.insertMany(req.body).then(() => {
        res.send('success')
    }).catch(err => {
        res.send('error')
    })
}

//getcar

const getCars = async (req, res) => {
    const email = req.owner;
    if (email) {
        const data = await Car.find({ owneremail: email })
        res.send(data)
    } else {
        res.send('no auth')
    }
}
const removeCar = async (req, res) => {
    const _id = req.body._id;
    Car.deleteMany({ _id }).then(() => {
        res.send('success')
    }).catch(err => {
        res.send('fail')
    })
}
module.exports = { authOwnerLogin, removeCar, addCar, getCars, authOwnerSignUp, OwnerBookings, OwnerPayments }