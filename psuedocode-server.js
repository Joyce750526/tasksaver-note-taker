// This application will use an Express.js back end and will save and retrieve note data from a JSON file.

//TODO: set up this file for an Express application (refer to Activity 01-Ins_Setup/server.js in the 11-Express Unit)

// WHEN I open the Note Taker
// THEN I am presented with a landing page with a link to a notes page
//TODO: GET * should return the index.html file.

// WHEN I click on the link to the notes page
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
//TODO: GET /notes should return the notes.html file.
//TODO: GET /api/notes should read the db.json file and return all saved notes as JSON.

// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
//TODO: POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column

// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
