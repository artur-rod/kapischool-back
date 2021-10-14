const mongoose = require("../static/database");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  courses: {
    type: Array,
  },
  address: {
    type: Object,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
