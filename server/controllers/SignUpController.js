import { UserModel } from "../models/UserSchema.js";

const send_signupDetails = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  if (!name || !email || !password) {
    res.json("Please Fill All The Input Fields");
  }

  await UserModel.create({ name, email, password })
    .then(() => {
      console.log("User Created in Database Successfully");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default send_signupDetails;
