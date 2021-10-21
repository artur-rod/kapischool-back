const Course = require("../../../models/course");

const courses = {
  create: async (data) => {
    const { name } = data;

    if (await Course.findOne({ name })) {
      throw { error: "Course alreary created" };
    }

    const course = await Course.create(data);
    return { course };
  },
  showAll: async () => {
    try {
      const listCourses = await Course.find();
      return listCourses;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = courses;
