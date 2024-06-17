const User = require("../models/user");

const catchAsync = require("../utils/catchAsync");

exports.getUsers = catchAsync(async (req, res, next) => {
    const all_users = await User.find({
      verified: true,
    }).select("firstName lastName _id");
  
    const this_user = req.user;
  
    const remaining_users = all_users.filter(
      (user) =>
        !this_user.friends.includes(user._id) &&
        user._id.toString() !== req.user._id.toString()
    );
  
    res.status(200).json({
      status: "success",
      data: remaining_users,
      message: "Users found successfully!",
    });
  });