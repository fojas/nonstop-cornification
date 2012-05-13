var express = require('express')
  , cornify = require('cornify');

var app = module.exports = express.createServer();
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(cornify({interval:2000}));
  app.use(app.router);
});

app.get('/', function(req, res){res.render('index', { title: 'Cornify' })});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
