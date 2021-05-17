import mongoose from 'mongoose'
import type { ProfileSchema } from '../types/profiles'

const techniqueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
})

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255
  },
  level: {
    type: String,
    required: true,
    maxlength: 255
  },
  type: {
    type: String,
    required: true,
    maxlength: 255
  },
  attribute: {
    type: String,
    required: true,
    maxlength: 255
  },
  field: {
    type: Array
  },
  group: {
    type: Array
  },
  technique: [techniqueSchema],
  artwork: {
    type: String,
    required: true,
    maxlength: 255
  },
  profile: {
    type: String,
    required: true
  },
  timestamps: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date
    },
    deletedAt: {
      type: Date,
      default: null
    }
  }
})

export default mongoose.model<ProfileSchema & mongoose.Document>(
  'profile',
  profileSchema
)
