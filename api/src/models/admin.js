const mongoose = require("../static/database");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  office: {
    type: "string",
  },
  email: {
    type: "string",
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: "string",
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

adminSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
