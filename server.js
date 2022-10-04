const express = require("express");
const path = require("path");

// This sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// This Link to setup Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This is to Link to Assets
app.use(express.static("public"));


//TODO: GET /notes should return the notes.html file.
//refer to class activity 07-Ins_GET-Fetch/server.js for a get route to render a public html file.

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//TODO: GET /api/notes should read the db.json file and return all saved notes as JSON.
//refer to class activity 28-Stu_Mini-Project/Main/routes/tips.js for a get route to render data from a file
// GET Route for retrieving all the tips
app.get('/api/notes', (req, res) => {
  readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

//TODO: POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
//refer to class activity 28-Stu_Mini-Project/Main/routes/tips.js for a POST route to take in a req.body and add to a .json file.
tips.post('/', (req, res) => {
  console.log(req.body);

  const { username, topic, tip } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      topic,
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Notes added successfully 🚀`);
  } else {
    res.error('Error in adding notes');
  }
});

//TODO: GET * should return the index.html file.
//refer to class activity 07-Ins_GET-Fetch/server.js for a get route to render a public html file.
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);1



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
