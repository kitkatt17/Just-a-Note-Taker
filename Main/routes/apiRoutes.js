
// Not using backstock anymore!!



// All dependencies
const { response } = require('express');
const fs = require('fs');
const router = require('express').Router();
const newPath = require()

const app = express();

// Deletes 'Notes' the one you don't want anymore that has 'noteId' equal to req params id
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    backlog
      .removeNote(noteId)
      .then(() => response.json({ success: true }))   
      .catch((error) => response.status(500).json(error));
  });

// Gets the 'notes' that respones to all the notes from the current database (backlog)
router.get('/notes', (res, req) => {
    backlog
    .getNotes()
    .then((notes) => {
        return res.json('notes')
    })
    response.json({ success: true }) 
    .catch((error) => res.status(500).json(error));
});

// The posts/adds the notes
  router.post('/notes', (res, req) => {
    const noteData = request.body;
    backlog
        .addNote(noteData)
        .then(() => response.json(note))
        .catch((error) => res.status(500).json(error));
  });





module.exports = router;