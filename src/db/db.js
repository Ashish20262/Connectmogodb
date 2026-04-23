const mongoose = require("mongoose")
const dns = require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"]);

async function connectDB() {
    await mongoose.connect("mongodb+srv://db:Ashish1234@mogodbconect.uxrpmxm.mongodb.net/kumar")
// await mongoose.connect("mongodb+srv://db:Ashish1234@mogodbconect.uxrpmxm.mongodb.net/kumar")
    console.log("Connected to DB")
}

module.exports =  connectDB