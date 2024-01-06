const mongose = require("mongoose")
const express = require("express")
const app = express()
const cors = require('cors')
const { Owner, User } = require("./models/model")
const UserRoutes = require('./Routes/UserRoutes')
const OwnerRoutes = require('./Routes/OwnerRoutes')
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
// const url = 'mongodb+srv://carRent:carRentalApp@car-rental-app.1q8e4gu.mongodb.net/admin_login'
const url = 'mongodb+srv://ajay:1234@carrentalapp.0slwolu.mongodb.net/CarRentalApp'
const ownerFunction = () => {
    mongose.connect(url).then(() => {
        console.log("connected api")
    }).catch(err => console.log(err))
}
ownerFunction()


app.use('/api/user', UserRoutes)
app.use('/api/owner', OwnerRoutes)

app.listen(1001, () => {
    console.log("server port 1001")
})
