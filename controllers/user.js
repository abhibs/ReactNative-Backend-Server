import { User } from '../models/user.js'
import ErrorHandler from '../utils/error.js'
import { sendToken, cookieOptions } from '../utils/features.js'
import { asyncError } from '../middlewares/error.js'

export const aboutMe = (req, res) => {
  res.send('Abhiram B S Javalli Tudoor Thirthahalli')
}

export const userlogin = asyncError(async (req, res, next) => {
  // res.send('User Login')
  const { email, password } = req.body

  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    return next(new ErrorHandler('Incorrect Email or Password', 400))
  }

  const isMatched = await user.comparePassword(password)

  if (!isMatched) {
    return next(new ErrorHandler('Incorrect Email or Password', 400))
  }
  sendToken(user, res, `Welcome Back, ${user.name}`, 200)
})

export const userRegister = asyncError(async (req, res, next) => {
  const { name, email, password, address, city, country, pinCode } = req.body

  let user = await User.findOne({ email })
  if (user) return next(new ErrorHandler('User Already Exist', 400))
  await User.create({
    name,
    email,
    password,
    address,
    city,
    country,
    pinCode,
  })
  res.status(201).json({
    success: true,
    message: 'Registered Successfully',
  })
})

export const getProfile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id)

  res.status(200).json({
    success: true,
    user,
  })
})

export const userLogout = (req, res) => {
  res
    .status(200)
    .cookie('token', '', {
      ...cookieOptions,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: 'Logged Out Successfully',
    })
}

export const updateProfile = (req, res) => {
  res.send('User Profile Update')
}
