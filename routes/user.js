import express from 'express'
import {
  aboutMe,
  changePassword,
  getProfile,
  updateProfile,
  updateProfilePic,
  userlogin,
  userLogout,
  userRegister,
} from '../controllers/user.js'
import { isAuthenticated } from '../middlewares/auth.js'
import { singleUpload } from '../middlewares/multer.js'

const router = express.Router()

router.get('/abhiram', aboutMe)
router.post('/login', userlogin)
router.post('/register', singleUpload, userRegister)
router.get('/profile', isAuthenticated, getProfile)
router.get('/logout', isAuthenticated, userLogout)

router.put('/update/profile', isAuthenticated, updateProfile)
router.put('/change/password', isAuthenticated, changePassword)

router.put('/update/profile/pic', updateProfilePic)

export default router
