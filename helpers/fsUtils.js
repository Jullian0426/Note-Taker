const fs = require('fs');

// Read the notes data from db.json
const readNotesData = () => {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '/db.json'), 'utf8'));
};

// Write the notes data to db.json
const writeNotesData = (notesData) => {
  fs.writeFileSync(path.join(__dirname, '/db.json'), JSON.stringify(notesData));
};

module.exports = { readNotesData, writeNotesData };
