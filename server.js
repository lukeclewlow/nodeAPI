var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 9999;

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

app.get('/', function(request, response){
  response.render('index');
});

app.get('/users/:user', function(request, response){
  response.header('Content-Type','application/json; charset=utf-8');
  response.render(request.params.user);
});

server.listen(port, function(){
  console.log('server listening on port: ' + port);
});