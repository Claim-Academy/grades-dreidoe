import got from "got";
const BASE_URL = "https://localhost:3000";

export default {
  getStudents() {
    return got(BASE_URL).json();
  },
};
export const getAllStudentNames = (students) =>
  students.map((student) => student.name);

export const getStudentById = (movie, id);
