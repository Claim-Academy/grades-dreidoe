import { getStudentGradeById } from "./lib";

it("should find a specific grade for a specific student",() => {
const inputRoster = [
  {
    id: 1,
    grades: [
      { id: 1},
      { id: 2},
      { id: 3},
    ]
  },
  {
    id: 2,
    grades: [
      { id: 1},
      { id: 2},
      { id: 3},
    ]
  }
];
const inputGradeId = 2;
const inputStudentId = 1;
const expected = { id:2 };

const actual = getStudentGradeById ({
  roster: inputRoster,
  gradeId: inputGradeId,
  student: inputStudentId,
});
expected (actual).toEqual(expected);
