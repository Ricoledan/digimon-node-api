export interface Users {
  email: string
  password: string
}

export interface UserSchema {
  _id: { $oid: string }
  __v: number
  timestamps: {
    createdAt: string
    updatedAt: string
    deletedAt: string
  }
}
