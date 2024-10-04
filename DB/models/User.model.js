import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  tasks:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Tasks'
    }
  ]
})

export const User = mongoose.model('User', UserSchema)