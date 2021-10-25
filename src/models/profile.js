const mongoose = require("../static/database");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  courses: [
    {
      details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      paymentId: "String",
    },
  ],
  address: {
    type: [],
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
