import express from 'express'
import {
  aboutMe,
  changePassword,
  getProfile,
  updateProfile,
  userlogin,
  userLogout,
  userRegister,
} from '../controllers/user.js'
import { isAuthenticated } from '../middlewares/auth.js'

const router = express.Router()

router.get('/abhiram', aboutMe)
router.post('/login', userlogin)
router.post('/register', userRegister)
router.get('/profile', isAuthenticated, getProfile)
router.get('/logout', isAuthenticated, userLogout)

router.put('/update/profile', isAuthenticated, updateProfile)
router.put('/change/password', changePassword)

export default router
