import { User } from '../models/user.js'

export const aboutMe = (req, res) => {
  res.send('Abhiram B S Javalli Tudoor Thirthahalli')
}

export const userlogin = (req, res) => {
  res.send('User Login')
}

export const userRegister = async (req, res) => {
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
}
