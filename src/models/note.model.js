// const { default: mongoose } = require("mongoose");
// const noteSchema = require("mongoose");

// const noteSchema = new mongoose.Schema({
//     title : String,
//     description : String,
// })

// const noteModal = mongoose.model("note",noteSchema)

// module.exports =  noteModal

// const mongoose = require("mongoose");

// const noteSchema = new mongoose.Schema({
//     title: String,
//     description: String,
// });

// const noteModel = mongoose.model("note", noteSchema);

// module.exports = noteModel;

const mongoose =require("mongoose");


const noteSchema = new mongoose.Schema({
    title: String,
    description : String
})

const noteModal = mongoose.model("note", noteSchema)

module.exports = noteModal