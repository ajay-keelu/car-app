const mongose = require("mongoose")


//owner schema
const owner = mongose.Schema({
    name: String,
    email: String,
    mobile: String,
    password: String,
    // pic: String,
    // details: Object,
    // booking: Object,
    // payment: Object
})
//user data Schema
const user = mongose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: String,
    // booking: Object,
    // payment: Object
})
// admin data schema
const admin = mongose.Schema({
    name: String,
    password: String
})

//cars 
const car = mongose.Schema({
    owneremail: String,
    image: String,
    name: String,
    model: String,
    carId: String,
    capacity: String,
    price: String,
    licenceId: String,
})

//payments

const payment = mongose.Schema({
    owneremail: String,
    useremail: String,
    details: Object
})
//Bookings
const booking = mongose.Schema({
    owneremail: String,
    useremail: String,
    details: Object
})


const Owner = mongose.model('Owner', owner)
const User = mongose.model('User', user)
const Admin = mongose.model('Admin', admin)
const Car = mongose.model('Car', car)
const Payment = mongose.model('Payment', payment)
const Booking = mongose.model('Booking', booking)
module.exports = { Owner, User, Admin, Payment, Booking, Car }