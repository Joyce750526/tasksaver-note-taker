const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(express.static("public"));

//TODO: GET * should return the index.html file.
//refer to class activity 07-Ins_GET-Fetch/server.js for a get route to render a public html file.

//TODO: GET /notes should return the notes.html file.
//refer to class activity 07-Ins_GET-Fetch/server.js for a get route to render a public html file.

//TODO: GET /api/notes should read the db.json file and return all saved notes as JSON.
//refer to class activity 28-Stu_Mini-Project/Main/routes/tips.js for a get route to render data from a file

//TODO: POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
//refer to class activity 28-Stu_Mini-Project/Main/routes/tips.js for a POST route to take in a req.body and add to a .json file.

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
