// All required dependencies 
const express = require('express');
const app = express();
        // const express = require('express');
let notes = require('./db/db.json')
// The local host port
const PORT = process.env.PORT || 3001;
const fs = require('fs');


// All routes

// const htmlRoutes = require('./routes/htmlRoutes');
// const apiRoutes = require('./routes/apiRoutes');
const path = require('path');
// const router = require('./routes/htmlRoutes');


// Static files from 'public' directory
app.use(express.static('public'));


// Connecting the url html to direct the user
app.get("/notes", (req, res) => {
    console.log('sent notes.html')
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get("/", (req, res) => {
    console.log('sent index.html');
    res.sendFile(path.join(__dirname, '/public/index.html'));
    res.json(notes);
});

// For the back-end input to add a note
app.post("/api/notes", (req, res) => {
    const { body } = req;
    const newNote = { ...body, id: notes.length + 1 };
    notes.push(newNote);

    fs.writeFile('./db/db.json', JSON.stringify(notes), (error) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Note added successfully.');
        res.json(notes);
    });
});

// To remove a note (back-ended)
app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    
    const removedNotes = notes.filter(note => note.id != id);
    
    notes = removedNotes;
    
    fs.writeFile('./db/db.json', JSON.stringify(removedNotes), (error) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log('Note deleted successfully.');
      res.json(notes);
    });
  });

// router.delete('/api/notes/:id', (req, res) => {
//     const deleteNote = request.params.id;
//     .deleteNote(noteId)
//     .then(() => response.json({ success: true }))
//     .catch((error) => response.status(500).json(error));
// })


// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Registering the route middleware
// require('./routes/htmlRoutes')(app);
// require('./routes/apiRoutes')(app);


// App listener that starts the server
app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});