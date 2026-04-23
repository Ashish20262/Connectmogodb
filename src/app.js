// console.log("APP FILE LOADED");
// const express = require("express")
// const noteModal= require("./models/note.model")
// const app = express()

// app.use(express.json());
// app.post("/note", async(req,res) => {
    //     const date = req.body
    //    await noteModal.create({
        //         title: data.title,
        //         description:  data.description
        //     })
        //     res.status(201).json({
            //         message: "Note create"
            //     })
            // })
// module.exports=app
const express = require("express");
const noteModal = require("./models/note.model");

const app = express();

app.use(express.json());   // 🔥 aa line upar hovi joiye

app.post("/notes", async (req, res) => {
    try {
        console.log(req.body);  // 👈 check karo

        const data = req.body;

        const newNote = await noteModal.create({
            title: data.title,
            description: data.description
        });

        res.status(201).json({
            message: "Note created",
            data: newNote
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// app.get("/", async (req, res) => {
//     const notes = await Note.find();
//     res.json(notes);
// });

app.get("/notes", async (req, res) => {
   const notes = await noteModal.find()

   res.status(200).json({
    message: "Notes retrieved successfully",
    data: notes
   })
})

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;
    await noteModal.findByIdAndDelete(id);

    res.status(200).json({
        message: "Note deleted successfully"
    })
})

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const description = req.body.description;
    await noteModal.findByIdAndUpdate({_id: id },{description : description});

    res.status(200).json({
        message: "NOTE UPDATED SUCCESSFULLY"
    })
})
module.exports = app 