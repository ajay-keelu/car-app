const express = require("express")

const router = express.Router();
const { protectGetOwner } = require('../config/config');
const { authOwnerLogin, authOwnerSignUp, OwnerBookings, OwnerPayments, addCar, getCars } = require("../DetailsMethods/ownerMethods");

router.route('/login').post(authOwnerLogin)
router.route('/signup').post(authOwnerSignUp)
router.route('/booking').get(protectGetOwner, OwnerBookings)
router.route('/payment').get(protectGetOwner, OwnerPayments)
router.route('/car').post(addCar).get(protectGetOwner, getCars)
module.exports = router


/*
const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('email')
    }
  }
*/