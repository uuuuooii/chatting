const { createServer } = require('http');
const app = require('./app');
const { Server } = require('socket.io');
require('dotenv').config();

// 서버 만들기
const httpServer = createServer(app);
// 웹 소켓 서버
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

// io 넘겨주기
require('./utils/io')(io);

// 서버를 틀어주다?
httpServer.listen(process.env.PORT, () => {
  console.log('server listening on port', process.env.PORT);
});
