import express from 'express'
import {
  aboutMe,
  getProfile,
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
router.get('/logout', userLogout)

export default router
