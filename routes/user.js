import express from 'express'
import { aboutMe, userlogin, userRegister } from '../controllers/user.js'

const router = express.Router()

router.get('/abhiram', aboutMe)
router.post('/login', userlogin)
router.post('/register', userRegister)

export default router
