const express = require('express');
const models = require('./db/model');
const PORT = 3030;

const app = express();

app.use(express.static('dist'));
app.use(express.json()); // req.body

// Make a server!
app.post('/photo', (req, res) => {
  console.log(req.body);

  models.savePhoto(Object.values(req.body.data), (err, results) => {
    if(err) {
      // throw err;
      console.error(err);
      res.status(400).send('Issue inserting into photos.');
    } else {
      console.log(results);
      res.send('Received and added.');
    }
  });

  // res.send('Received.');
});

app.listen(PORT, (err) => {
  if(err) {
    throw err;
  } else {
    console.info(`Listening on port ${PORT}...`);
  }
});
