import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema({
  __v: { type: Number, required: true },
  name: { type: String, required: true },
  level: { type: String, required: true },
  type: { type: String, required: true },
  attribute: { type: String, required: true },
  field: { type: String },
  group: { type: String },
  technique: { type: String, required: true },
  artwork: { type: String, required: true },
  profile: { type: String, required: true },
  timestamp: {
    created_at: { type: String, required: true },
    updated_at: { type: String },
    deleted_at: { type: String }
  }
})

const model = mongoose.model('ProfileModel', ProfileSchema)

module.exports = model
