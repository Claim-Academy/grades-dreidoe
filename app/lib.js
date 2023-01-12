import apiService from "./api.service.js";

const grades = await apiService.getGrades();

export const getAllNamesFromRoster = (roster) =>
  roster.map((person) => person.name);

export const getStudentById = (roster, id2Find) =>
  roster.find((person) => person.id === id2Find);

export const getStudenGradeById = (gradeID, studentId) => {};
