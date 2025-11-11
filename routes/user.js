import express from 'express'
import { aboutMe } from '../controllers/user.js'

const router = express.Router()

router.get('/abhiram', aboutMe)

export default router
