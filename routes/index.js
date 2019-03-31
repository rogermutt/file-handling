const express = require('express');
const router = express.Router();
const readFile = require('../controller/readFile');

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.post('/', function (req, res){

  readFile(req)

  // read file resposne goes here  
  return res.status(200).json({result: 'Upload Success'})

});

module.exports = router;
