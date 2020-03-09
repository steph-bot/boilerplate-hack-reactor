const express = require('express');
const app = express();
const port = 3030;

app.use(express.json());
app.use(express.static('dist'));

app.listen(port, (err) => {
  if(err) throw err;
  else console.log(`Listening on port ${port}...`);
});
