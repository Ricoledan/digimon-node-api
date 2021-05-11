export interface Users {
  firstName: string
  lastName: string
  userName: string
  avatar: string // store img in S3, references here as a url
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
