import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  userName: { type: String, required: true },
  avatar: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true }
})

export default mongoose.model<mongoose.Document>('user', UserSchema)
