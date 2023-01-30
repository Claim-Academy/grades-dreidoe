import got from "got";
const BASE_URL = "https://localhost:3001/grades";

export default {
  createStudent(payload) {
    return got
      .post(BASE_URL, {
        json: payload,
      })
      .json();
  },
  updateStudent(studentId, updateStudent) {},
};
