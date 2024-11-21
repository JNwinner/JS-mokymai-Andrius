const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


//config
const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// MONGO DATABASE SCHEMA
const noteSchema = new mongoose.Schema({
    tittle: String,
    date: String,
    time: String,
    content: String,
    status: Boolean
});
const Note = mongoose.model('Note', noteSchema);


// MongoDB connection URI

mongoose.connect(process.env.URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((err) => console.log(err))






//GET all notes
app.get('/notes', async (req, res) => {
    try {
        const results = await Note.find();
        res.json(results); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' }); 
    }
});



//GET ONE Note
app.get('/notes/:id', async (req, res) => {
    try {

        const note = await Note.findById(req.params.id);
        res.send(note);

    } catch (error) {

        res.status(500).json({ message: error.message })

    }
})


//POST new note

app.post('/notes', async (req, res) => {
    try {
        const note = new Note({
            tittle: req.body.tittle,
            date: req.body.date,
            time: req.body.time,
            content: req.body.content,
            status: req.body.status
        });
        await note.save();
        res.send(note);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//UPDATE note
app.put('/notes/:id', async (req, res) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {
                tittle: req.body.tittle,
                date: req.body.date,
                time: req.body.time,
                content: req.body.content,
                status: req.body.status
            },
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.json(updatedNote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//DELETE note
app.delete('/notes/:id', async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id)
        res.send({ message: 'Note deleted successfully' })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
})



