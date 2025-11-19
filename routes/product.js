import express from 'express'
import { addProduct, getAllProducts } from '../controllers/product.js'
import { isAuthenticated } from '../middlewares/auth.js'

const router = express.Router()

router.get('/all', getAllProducts)
router.post('/add', isAuthenticated, addProduct)

export default router
