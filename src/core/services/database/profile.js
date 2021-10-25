const User = require("../../../models/user");
const Profile = require("../../../models/profile");

const profile = {
  coursesUpdate: async (body) => {
    const { email, course } = await body;

    try {
      const findUser = await User.findOne({ email: email });
      const findProfile = await Profile.findOne({ user: findUser._id });

      await Profile.updateOne(
        { user: findUser._id },
        { courses: [...findProfile.courses, course] }
      );

      return { message: "Update realized" };
    } catch (err) {
      throw err;
    }
  },

  deleteCourse: async (body) => {
    const { email, paymentId } = await body;

    try {
      const findUser = await User.findOne({ email: email });
      const findProfile = await Profile.findOne({ user: findUser._id });

      let courseIndex;
      await findProfile.courses.forEach((course, index) => {
        if (course.paymentId === paymentId) {
          courseIndex = index;
        }
      });

      await Profile.updateOne(
        { user: findUser._id },
        { $pull: { courses: { paymentId: paymentId } } },
        { safe: true, multi: false }
      );

      return { message: "Course deletion realized" };
    } catch (err) {
      throw err.data;
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

    const profile = await Profile.findOne({ user: findUser._id })
      .populate("user")
      .populate("courses.details");
    return profile;
  },
};

module.exports = profile;
