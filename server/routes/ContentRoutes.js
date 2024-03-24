import express from "express";
import ContentController from "../controllers/ContentController.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const verifyUser = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    if (renewToken(req, res)) {
      next();
    }
  } else {
    jwt.verify(accessToken, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.json({ valid: false, message: "Invalid Access Token" });
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};

const renewToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  let exists = false;
  if (!refreshToken) {
    return res.json({ valid: false, message: "No Refresh Token" });
  } else {
    jwt.verify(refreshToken, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.json({ valid: false, message: "Invalid Refresh Token" });
      } else {
        const accessToken = jwt.sign({ email: decoded.email }, process.env.SECRET, {
          expiresIn: "1m",
        });
        res.cookie("accessToken", accessToken, { maxAge: 60000 });
        exists = true;
      }
    });
  }
  return exists;
};

router.get("/content", verifyUser, ContentController);

export default router;
