import userModel from "../models/user.model.js";

const signUp = async (req, res) => {
  let { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(404).json({ message: "please fill your data" });
    }

    let foundedEmail = await userModel.findOne({ email: email });
    if (foundedEmail) {
      return res.status(400).json({ message: "this email is already token" });
    }

    let newUser = new userModel({
      name: name,
      email: email,
      password: password,
    });
    newUser.save();

    return res.status(200).json({ message: "user signup successfully" });
  } catch (error) {
    return res.status(500).json({ message: "server occurred", error });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req;

    if (!email || !password) {
      return res.status(401).json({ message: "no email or password" });
    }
  } catch (error) {
    return res.status(500).json({ message: "server occurred", error });
  }
};

export { signUp, signIn };
