const User = require("../../../models/user");
const Profile = require("../../../models/profile");

const profile = {
  coursesUpdate: async (body) => {
    const { email, paymentId } = await body;
    const findUser = await User.findOne({ email: email });
    const findProfile = await Profile.findOne({ user: findUser._id });

    const courseUpdate = await Profile.updateOne(
      { user: findUser._id },
      { courses: [...findProfile.courses, paymentId] }
    );

    return { message: "ok" };
  },

  addressUpdate: async (body) => {
    const { email, address } = body;
    const findUser = await User.findOne({ email: email });
    const findProfile = await Profile.findOne({ user: findUser._id });

    const addressUpdate = await Profile.updateOne(
      { user: findUser._id },
      { address: address }
    );
    return { message: "ok" };
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
