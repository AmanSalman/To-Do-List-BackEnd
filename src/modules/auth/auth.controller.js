import { User } from "../../../DB/models/User.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async(req, res, next) => {
  const {email, password} = req.body
  const user = await User.findOne({email})
  if (!user) {
    return res.status(401).json({message: 'Invalid email or password'})
  }
  const passMatched = await bcrypt.compare(password, user.password)
  if (!passMatched) {
    return res.status(401).json({message: 'Invalid email or password'})
  }
  const token = jwt.sign({_id:user._id, email:user.email}, process.env.Token_JWT_SECRET)
  return res.status(200).json({message:"success", token})
}


export const register = async (req, res, next) => {
  const {username, email, password} = req.body
  const user = await User.findOne({email})
  if (user) {
    return res.status(400).json({message: 'User already exists'})
  }
  const hashedPass = await bcrypt.hash(password, parseInt(process.env.SALT))
  const newUser = new User({username, email, password:hashedPass})
  await newUser.save()
  return res.status(201).json({message: 'User registered successfully'})
}
