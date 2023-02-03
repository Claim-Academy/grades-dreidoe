import express from "express";
import studentRoutes from "./student/routes.js";
import config from "./config.js";
import decodeUser from "./middleware/decode-user.js";
export default () => {
  const app = express();

  // Tell express to parse the request body as JSON
  // Without this, req.body will be undefined
  // * THIS MIDDLEWARE MUST BE BEFORE THE ROUTES
  app.use(express.json());
  // this middleware will decode the user from the JWT
  app.use(decodeUser);

  // Any requests to /api/students will be handled by studentRoutes
  app.use("/api/students/", studentRoutes);

  app.listen(config.port, () => {
    console.info(`Server running on: http://localhost:${config.port}`);
  });
};
