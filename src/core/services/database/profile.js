const User = require("../../../models/user");
const Profile = require("../../../models/profile");

const profile = {
  coursesUpdate: async (body) => {
    const { email, paymentId } = await body;

    try {
      const findUser = await User.findOne({ email: email });
      const findProfile = await Profile.findOne({ user: findUser._id });

      await Profile.updateOne(
        { user: findUser._id },
        { courses: [...findProfile.courses, paymentId] }
      );

      return { message: "Update realized" };
    } catch (err) {
      throw err;
    }
  },

  addressUpdate: async (body) => {
    const { email, address } = body;

    try {
      const findUser = await User.findOne({ email: email });
      const findProfile = await Profile.findOne({ user: findUser._id });

      await Profile.updateOne({ user: findUser._id }, { address: address });
      return { message: "Update realized" };
    } catch (err) {
      throw err;
    }
  },

  show: async (body) => {
    const { email } = body;
    const findUser = await User.findOne({ email: email });

    if (findUser === null) {
      throw { error: "User does not exists" };
    }

    const profile = await Profile.findOne({ user: findUser._id }).populate(
      "user"
    );
    return profile;
  },
};

module.exports = profile;
