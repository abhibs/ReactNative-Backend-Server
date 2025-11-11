import mongoose from 'mongoose'
import { type } from '../node_modules/nodemon/index.d'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter Name'],
  },

  email: {
    type: String,
    required: [true, 'Please Enter Email'],
    unique: [true, 'Email Already Exist'],
  },
  password: {
    type: String,
    required: [true, 'Please Enter Password'],
    minLength: [6, 'Password must be at least 6 characters long'],
    select: false,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },

  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },

  avatar: {
    public_id: String,
    url: String,
  },
  otp: Number,
  otp_expire: Date,
})
