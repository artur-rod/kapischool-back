const mongoose = require("../database");
const User = require("../models/user");

const userUpdateController = {
  coursesUpdate: async (req, res) => {
    const { email, paymentId } = req.body;
    const userUpdated = await User.findOne({ email: email });
    User.updateOne(
      { email: email },
      { course: paymentId },
      function (err, user) {
        if (err) {
          return res.status(400).send({ error: "Update Failed" });
        } else {
          res.send({
            user: userUpdated,
            update: user,
          });
        }
      }
    );
  },
};

module.exports = userUpdateController;
