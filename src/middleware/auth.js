import  jwt  from 'jsonwebtoken';
import { User } from '../../DB/models/User.model.js';

export const auth = ()=>{
  return async (req, res, next)=>{
    const {authorization} = req.headers
    console.log(authorization)
    if(!authorization || authorization ==''){
      return res.status(401).json({message:'Unauthorized'})
    }

    const token = authorization
    let decoded;
    try {
       decoded = jwt.verify(token, process.env.Token_JWT_SECRET);
    } catch (error) {
      return res.status(401).json({message:'Invalid token'})
    }
    
    const user = await User.findById(decoded._id)
    if(!user){
      return res.status(404).json({message:'User not found'})
    }
    req.user = user
    
    next()
  }
}