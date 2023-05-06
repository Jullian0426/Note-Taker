const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const { readNotesData, writeNotesData } = require('../helpers/fsUtils')

// API routes
router.get('/notes', (req, res) => {
    // Read db.json and return saved notes
    const notesData = readNotesData();
    res.json(notesData);
});

router.post('/notes', (req, res) => {
    // Receive a new note, add it to db.json, and return the new note
    const notesData = readNotesData();
    const newNote = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };
  
    notesData.push(newNote);
    writeNotesData(notesData);
    res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
    // Delete a note with the specified id
    const notesData = readNotesData();
    const noteId = req.params.id;
    const updatedNotesData = notesData.filter(note => note.id !== noteId);
    writeNotesData(updatedNotesData);
    res.json({ message: `Note with id: ${noteId} has been deleted.` });
});

module.exports = router;