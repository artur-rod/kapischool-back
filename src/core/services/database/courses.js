const Course = require("../models/course");

const courses = {
  create: async (data) => {
    const { name } = data;

    if (await Course.findOne({ name })) {
      return { error: "Course alreary created" };
    }

    const course = await Course.create(data);
    return { course };
  },
  showAll: async () => {
    const listCourses = await Course.find();
    return listCourses;
  },
};

module.exports = courses;
