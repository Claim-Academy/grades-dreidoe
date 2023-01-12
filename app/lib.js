import apiServices from "./api.services.js";
const grades = await apiService.getGrades();

export const getAllNamesFromRoster = (roster) =>
  roster.map((person) => person.name);

export const getStudentById = (roster, id2Find) =>
  roster.find((person) => person.id === id2Find);

export const getStudentGradeById = (roster, gradeID, studentId) => {
  const foundStudent = getStudentById(roster, studentId);
  const foundGrade = foundStudent.grades.find((grade) => grade.id === gradeID);
  return { ...foundGrade, name: foundStudent.name };
};
