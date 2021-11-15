(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/* needs:
-sticky bar
-user list
-DM system
-right side appearance for sending text
*/

const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const port = 8080;
const app = express();
//const clientPath='C:\Users\Keon\back-end\game\client';


app.use(express.static('build'));

const server = http.createServer(app);

const io = socketio(server);

const users = [0];

io.on('connection', sock => {
  //connect
  let cache = users[users.length - 1] + 1;
  let userid = 'guest#' + cache;
  users.push(cache);
  console.log(users);
  users.length > 2 ? io.sockets.emit('population', users.length - 1 + ' users online') : io.emit('population', users.length - 1 + ' user online');
  sock.emit('id', userid);
  io.sockets.emit('announcement', userid + ' has connected');
  //chat
  console.log(userid);
  sock.on('chat', text => {
    console.log(userid);
    io.emit('messenger', userid + ': ');
    io.emit('message', text);
  });
  //disconnect
  sock.on('disconnect', () => {
    console.log(userid + ' has disconnected');
    users.splice(users.indexOf(cache), 1);
    users.length > 2 ? io.sockets.emit('population', users.length - 1 + ' users online') : io.sockets.emit('population', users.length - 1 + ' user online');
    io.sockets.emit('announcement', userid + ' has disconnected');
    console.log(users);
  });
});

server.on('error', function (err) {
  console.log('Something went wrong. Error Message:', err);
});

server.listen(port, () => {
  console.log('LeetCodeLive started on ' + port);
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(port, 'port', 'server.js');
  reactHotLoader.register(app, 'app', 'server.js');
  reactHotLoader.register(server, 'server', 'server.js');
  reactHotLoader.register(io, 'io', 'server.js');
  reactHotLoader.register(users, 'users', 'server.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();