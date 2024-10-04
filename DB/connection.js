import mongoose from "mongoose"



export const connDB = async ()=>{
  return mongoose.connect(process.env.DB ).then(()=>{
    console.log("Connected to MongoDB")
  }).catch(()=>{
    console.log('error Connected to MongoDB')
  })
}

