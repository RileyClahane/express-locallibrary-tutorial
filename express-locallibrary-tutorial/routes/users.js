var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/cool', function(req, res, next) {
  res.send('ur so cool');
});

module.exports = router;

//mongodb+srv://RileyC:CBr5uh46j0@cluster0.ajvkt.mongodb.net/local_library?retryWrites=true&w=majority
