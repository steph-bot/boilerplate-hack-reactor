const db = require('./index');

// Build query models!
const savePhoto = (imageData, callback) => {
  // return new Promise((resolve, reject) => {
  db.query(
    'INSERT INTO photos (image_url, description, title, date) VALUES (?, ?, ?, ?);',
    imageData, // []
    (err, results) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
  // });
};

module.exports = {
  savePhoto,
};