var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){

  socket.on('get_request', function(request){
    //console.log(request.user_id);

    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
          socket.emit('response', { json: this.responseText, });
      }
    };

    xhr.open("GET", "http://localhost/node_url/ajax.php?id=" + request.user_id);
    xhr.send();
  });

});


http.listen(port, function(){
  console.log('listening on *:' + port);
});
