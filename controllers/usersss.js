import { User } from "../models/users.js";
import bcrypt from "bcrypt";
import { sendCookies } from "../utils/features.js";

export const getAllUsers = async (req, res) => {};

export const getMyDetail =  (req, res) => {

  
  res.status(200).json({
    success: true,
    user:req.user
  });
};

export const loginUsers = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user)
    return res.status(404).json({
      success: false,
      message: "Invalid Email or Password",
    });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(404).json({
      success: false,
      message: "Invalid Email or Password",
    });

  sendCookies(user, res, `Welcome Aboard ${user.name}`, 200);
};

export const logoutUsers =async(req,res)=>{
  res.status(200).cookie("token","",{expires:new Date(Date.now()),
    sameSite:process.env.NODE_ENV==="development" ?"lax" :"none",
    secure:process.env.NODE_ENV==="development"? false : true}
  ).json({
    success:true,
    user:req.user
  })
}

export const newUsers = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user)
    return res.status(404).json({
      success: false,
      message: "User Already Exists",
    });

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashedPassword });

  sendCookies(user, res, "Registered Successfully", 200);
};
