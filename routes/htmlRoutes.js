// All dependencies

const router = require('express').Router();
const app = express();

const newPath = require('path');


// 'Notes' route is supposed to respond with notes.html
router.get('/notes', (req, res) => {
    res.sendFile = newPath.join(__dirname, '../Develop/public/notes.html');
});

// This route is supposed to respond with index.html
app.get('*', (req, res) => {
    res.sendFile = newPath.join(__dirname, '../Develop/public/index.html');
});


module.exports = router;