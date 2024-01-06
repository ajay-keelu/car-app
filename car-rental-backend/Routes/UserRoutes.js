const express = require("express")

const router = express.Router();
const { protectGetUser } = require('../config/config')
const { authUserLogin, authUserSignup, UpdateBookings, UpdatePayments, userBookings, userPayments, allCars } = require('./../DetailsMethods/userMethods')
router.route('/login').post(authUserLogin)
router.route('/signup').post(authUserSignup)
router.route('/booking').post(UpdateBookings).get(protectGetUser, userBookings)
router.route('/payment').post(UpdatePayments).get(protectGetUser, userPayments)
router.route('/allCars').get(protectGetUser, allCars)
module.exports = router