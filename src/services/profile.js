const User = require("../models/user");
const Profile = require("../models/profile");

const profile = {
  coursesUpdate: async (body) => {
    const { email, paymentId } = body;
    const findUser = await User.findOne({ email: email });
    const findProfile = await Profile.findOne({ user: findUser._id });

    const courseUpdate = await Profile.updateOne(
      { user: findUser._id },
      { courses: [...findProfile.courses, paymentId] },
      function (err, profile) {
        if (err) {
          return { error: err };
        } else {
          if (profile.acknowledged == true) {
            return { update: "Courses updated" };
          } else {
            return { update: "Something went wrong" };
          }
        }
      }
    );

    return { courseUpdate };
  },

  addressUpdate: async (body) => {
    const { email, address } = body;
    const findUser = await User.findOne({ email: email });
    const findProfile = await Profile.findOne({ user: findUser._id });

    const addressUpdate = Profile.updateOne(
      { user: findUser._id },
      { address: address },
      function (err, profile) {
        if (err) {
          return { error: err };
        } else {
          if (profile.acknowledged == true) {
            return { update: "Address updated" };
          } else {
            return { update: "Something went wrong" };
          }
        }
      }
    );
    return { addressUpdate };
  },

  show: async (body) => {
    const { email } = body;
    const findUser = await User.findOne({ email: email });

    if (findUser === null) {
      return { error: "User does not exists" };
    }

    const profile = await Profile.findOne({ user: findUser._id }).populate(
      "user"
    );
    return profile;
  },
};

module.exports = profile;
