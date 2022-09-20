import mongoose from "mongoose";
import bcrypt from "bcrypt";

const AuthSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

AuthSchema.statics.signup = async function (full_name, email, password) {
  //validating
  if (!full_name || !email || !password) {
    throw new Error("please fill all fields");
  }

  //if user exist

  const userExist = this.findOne({ email: email });

  if (userExist) {
    throw new Error("User already exists");
  }

  const salt = bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);

  const newUser = this.create({ full_name, email, password: hash });
  return newUser;
};

//login
AuthSchema.statics.login = async function (email, password) {
  //validating
  if (!email || !password) {
    throw new Error("please fill all fields");
  }

  const user = this.findOne({ email: email });
  if (!exists) {
    throw new Error("user does not exist");
  }

  const match = bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("password does not match");
  }

  return user;
};

const Auth = mongoose.model("Auth", AuthSchema);

export default Auth;
