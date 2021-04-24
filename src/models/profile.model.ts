import mongoose from 'mongoose'

const techniqueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
})

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
    type: { type: String, required: true },
    attribute: { type: String, required: true },
    field: { type: Array },
    group: { type: Array },
    technique: [techniqueSchema],
    artwork: { type: String, required: true },
    profile: { type: String, required: true }
  },
  { timestamps: true }
)

const profileModel = mongoose.model('profile', profileSchema)

export default profileModel
