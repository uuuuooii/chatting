module.exports = function (io) {
  // 말하는 함수 .emit()
  // 듣는 함수 .on()

  // 연결된 사람의 정보를 매개변수로 보내줌
  io.on('connection', async (socket) => {
    console.log('client is connected', socket.id);
  });
};