export const checkEmail = (email) => {
  if(!email) return res.status(403).json({message:'email is required'});
}