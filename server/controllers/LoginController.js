import { UserModel } from "../models/UserSchema.js";
import jwt from "jsonwebtoken";

const send_LoginDetails = (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          // Generating The Jwt Tokens Both Aceesss , Refresh
          const accessToken = jwt.sign({ email: email }, process.env.SECRET, {
            expiresIn: "1m",
          });
          const refreshToken = jwt.sign({ email: email }, process.env.SECRET_KEY, {
            expiresIn: "5m",
          });
          //   Saving Token In The Cookies
          res.cookie("accessToken", accessToken, { maxAge: 60000 });
          res.cookie("refreshToken", refreshToken, {
            maxAge: 300000,
            httpOnly: true,
            secure: true,
            sameSite: "strict",
          });
          return res.json({
            Login: true,
            Message:
              "Login Success and Token generate and stores in cookies Success",
          });
        }
      } else {
        return res.json({
          Login: false,
          Message: "User Does Not Exists, No Record Files",
        });
      }
    })
    .catch((err) => res.json(err.message));
};

export default send_LoginDetails;
