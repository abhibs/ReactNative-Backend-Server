import express from 'express'
import {
  aboutMe,
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

router.get('/update/profile', updateProfile)

export default router
