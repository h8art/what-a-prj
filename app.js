var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/node_modules'));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

const commands = [
  {
    name: 'пополнение',
    hint: 'Также вы можете указать сумму пополнения'
  }
]
function checkExists (char){
  return commands.map(function(command){
    if(command.name.indexOf(char)>=0){
      return command
    }
  });
}
io.on('connection', function(client) {  
  console.log('Client connected...');
  client.on('sendMessage', function(data) {
    client.emit('messages', data);
  });
  client.on('checkMessage', function(char) {
    console.log('gotChar')
    if(checkExists(char)&&char){
      client.emit('hints', checkExists(char).slice(0, 3));
    }
  });
});

server.listen(3083);  