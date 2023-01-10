import got from "got";
const BASE_URL = "https://localhost:3000";

export default {
  getStudents() {
    return got(BASE_URL).json();
  },
};
export const getAllStudentNames = (students) =>
  students.map((student) => student.grades.id.name);

export function getStudentById(students, id) {
  // find the movie
  const studentWithIdNumber = students.find((student) => students._id === id);
  if (!studentWithIdNumber) {
    throw new Error("Movie Not Found");
  }
}
