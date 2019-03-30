const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(port, function(){
  console.log(`Running on port ${port}`);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});