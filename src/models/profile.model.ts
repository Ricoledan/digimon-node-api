import mongoose from 'mongoose'
const Schema = mongoose.Schema
import type { DigimonSchema, TechniqueSchema } from '../types/digimon'

const techniqueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  timestamps: {
    createdAt: {
      type: Date,
      required: true,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: null
    },
    deletedAt: {
      type: Date,
      default: null
    }
  }
})

const digimonSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    unique: true,
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
    type: Array,
    required: true
  },
  group: {
    type: Array,
    required: true
  },
  technique: [{ type: Schema.Types.ObjectId, ref: 'technique' }],
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
      required: true,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: null
    },
    deletedAt: {
      type: Date,
      default: null
    }
  }
})

const Digimon = mongoose.model<DigimonSchema & mongoose.Document>(
  'digimon',
  digimonSchema
)

const Technique = mongoose.model<TechniqueSchema & mongoose.Document>(
  'technique',
  techniqueSchema
)
