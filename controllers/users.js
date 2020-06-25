
const User = require('../models/users');
const NotFoundError = require('../errors/NotFoundError');

module.exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)
      .orFail(() => new NotFoundError('User not found'));
    return res.send(user);
  } catch (err) {
    return next(err);
  }
};
