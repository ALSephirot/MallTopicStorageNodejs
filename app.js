
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

mongoose.connect('mongodb://asephirot:ALSephirot04140324@ds053300.mongolab.com:53300/guiadb', function(err, res) {
//mongoose.connect('mongodb://localhost/GuiaDB', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
    console.log(res);
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();
router.get('/', function(req, res) {
  res.send("<h1>Api Rest MallTopic With Azure Table Storage running...</h1>");
});


app.use(router);

router.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

var Port = process.env.PORT || 8888;
app.listen(Port, function() {
  console.log("Node server running on http://localhost:3000. Server MallTopic With Azure");
});