import express from 'express'
import { getAllProducts } from '../controllers/product.js'

const router = express.Router()

router.get('/all', getAllProducts)

export default router
