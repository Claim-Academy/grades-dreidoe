import got from "got";
const BASE_URL = "https://localhost:3000";

export default {
  getGrades() {
    return got(BASE_URL).json();
  },
};
