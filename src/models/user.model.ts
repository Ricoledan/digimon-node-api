import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  lastName: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  userName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  avatar: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  timestamps: {
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date },
    deletedAt: { type: Date }
  }
})

export default mongoose.model<mongoose.Document>('user', UserSchema)
