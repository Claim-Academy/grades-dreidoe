import got from "got";
const BASE_URL = "https://localhost:";

export default {
  getGrades() {
    return got(BASE_URL).json();
  },
};
