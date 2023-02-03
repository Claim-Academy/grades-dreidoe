import jwt from "jsonwebtoken";
import config from "../config.js";

export default function decodeUser(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  // this will either stay undefined or be the token
  let decodedToken;

  if (token) {
    decodedToken = jwt.verify(token, config.jwtSecret);
  }

  // if the token is valid, the decodedToken will be the user
  // if the token is invalid, the decodedToken will be undefined
  // if we get the user information from the token, we can attach it to the request
  req.user = decodedToken?.user;
  next();
}
