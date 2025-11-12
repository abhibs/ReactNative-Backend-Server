import { User } from '../models/user.js'
import ErrorHandler from '../utils/error.js'
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
  res.status(200).json({
    success: true,
    message: `Login Successfully, ${user.name} `,
  })
})

export const userRegister = asyncError(async (req, res) => {
  const { name, email, password, address, city, country, pinCode } = req.body

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
