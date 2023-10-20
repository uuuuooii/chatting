const User = require('../models/user');
const userController = {};

userController.saveUser = async (userName, sid) => {
  // 이미 있는 유저인지 확인
  // MongooseError: Operation `users.findOne()` buffering timed out after 10000ms
  let user = await User.findOne({ name: userName });
  // 없다면 새로 유저정보 만들기
  if (!user) {
    user = new User({
      name: userName,
      token: sid,
      online: true,
    });
  } else {
    // 이미 있는 유저라면 연결 정보 token값만 바꿔주자
    user.token = sid;
    user.online = true;
  }

  await user.save();
  return user;
};
module.exports = userController;
