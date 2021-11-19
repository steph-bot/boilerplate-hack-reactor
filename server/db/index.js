const mysql = require('mysql');
const config = require('./config');

// Connect to the database!
const db = mysql.createConnection(config);

db.connect((err) => {
  if(err) {
    throw err;
  } else {
    console.info(`Connected to ${config.database} database...`);
  }
});

// const savePhoto = () => {
//   return new Promise((resolve, reject) => {
//     connection.query('', (err, results) => {
//       if(err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };
module.exports = db;