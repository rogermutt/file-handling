const express = require('express');
const app = express();

const port = 3000;

const Router = require('./routes/index');

app.use(express.static('public'));
app.use('/', Router);
app.set('view engine', 'ejs');

app.listen(port, function(){
  console.log(`Running on port ${port}`);
});




