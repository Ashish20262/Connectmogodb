const { connect } = require("mongoose")
const app = require("./src/app")
const connectDB = require("./src/db/db")

connectDB()


app.listen(3500,() => {
    console.log("server is running on port  3500")
})

