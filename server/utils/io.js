const userController = require('../controllers/user.controller');

module.exports = function (io) {
  // 말하는 함수 .emit()
  // 듣는 함수 .on()

  // 연결된 사람의 정보를 매개변수로 보내줌
  io.on('connection', async (socket) => {
    console.log('client is connected', socket.id);

    // login으로 왔을 때 이 함수 실행됨
    socket.on('login', async (userName, cb) => {
      // 유저 정보를 저장
      try {
        const user = await userController.saveUser(userName, socket.io);
        console.log(user);
        cb({ ok: true, data: user });
      } catch (error) {
        console.log(error);
        cb({ ok: false, error: error.message });
      }
    });

    socket.on('disconnect', () => {
      console.log('user is disconnected');
    });
  });
};
