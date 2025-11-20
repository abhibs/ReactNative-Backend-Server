import express from 'express'
import {
  addProduct,
  getAllProducts,
  productDetail,
} from '../controllers/product.js'
import { isAuthenticated } from '../middlewares/auth.js'
import { singleUpload } from '../middlewares/multer.js'

const router = express.Router()

router.get('/all', getAllProducts)
router.post('/add', isAuthenticated, singleUpload, addProduct)
router.route('/single/:id').get(isAuthenticated, productDetail)
export default router
