const User = require('../models/user');
const userController = {};

userController.saveUser = async (userName, sid) => {
  // 이미 있는 유저인지 확인
  const user = await User.findOne({ name: userName });
  // 없다면 새로 유저정보 만들기
  // 이미 있는 유저라면 연결 정보 token값만 바꿔주자
};
module.exports = userController;
