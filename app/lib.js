export const getAllNamesFromRoster = (roster) =>
  roster.map((person) => person.name);

export const getStudentById = (roster, id2Find) =>
  roster.find((person) => person.id === id2Find);

export const getStudentGradeById = (roster, gradeID, studentId) => {
  const foundStudent = getStudentById(roster, studentId);
  const foundGrade = foundStudent.grades.find((grade) => grade.id === gradeID);
  return { ...foundGrade, name: foundStudent.name };
};

export const getStudentGradeByType = ({ roster, gradeTYpe, studentId }) => {
  const foundStudent = getStudentById(roster, studentId);
  const foundSTudentGrades = foundStudent.grades.filter(
    (grade) => grade.type === gradeTYpe
  );

  return { grades: foundSTudentGrades, name: foundStudent.name };
};

export const addGrade = ({ roster, gradeType, score, studentId }) => {
  const foundStudent = getStudentById(roster, studentId);
  const foundStudentCurrentGrade = foundStudent.grades;
  const newGrade = {
    type: gradeType,
    score,
  };
  const newStudentGrades = [...foundStudentCurrentGrade, newGrade];
  return {
    ...foundStudent,
    grades: newStudentGrades,
  };
};

export const updateGrades = foundStudent.grades.map((grade) => {
  if (grade.id === gradeId) {
    return {
      ...grade,
      score: updatedScore,
    };
  }
  return grade;
});

export const deleteGrade = ({ roster, gradeId, studentId }) => {
  const foundStudent = getStudentById(roster, studentId);

  const gradesWithoutDeletedGrade = foundStudent.grades.filter(
  (grade) => grade.id ===! gradeId
  );
  foundStudent.grades = [...gradesWithoutDeletedGrade];
  if(studentId.id === studentId) {
    return foundStudent;
  });
  return updatedRoster;
};


