const express = require('express');
const app = express();
const formidable = require('formidable');
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(port, function(){
  console.log(`Running on port ${port}`);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.post('/', function (req, res){

  let form = new formidable.IncomingForm();

  form.parse(req);

  form.on('fileBegin', function (name, file){
      file.path = __dirname + '/data/' + file.name;
  });

  form.on('file', function (name, file){
      console.log('Uploaded ' + file.name);
  });
  
  return res.status(200).json({result: 'Upload Success'})

});
