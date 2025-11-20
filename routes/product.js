import express from 'express'
import {
  addProduct,
  addProductImage,
  getAllProducts,
  productDetail,
  updateProduct,
} from '../controllers/product.js'
import { isAuthenticated } from '../middlewares/auth.js'
import { singleUpload } from '../middlewares/multer.js'

const router = express.Router()

router.get('/all', getAllProducts)
router.post('/add', isAuthenticated, singleUpload, addProduct)
router
  .route('/single/:id')
  .get(isAuthenticated, productDetail)
  .put(isAuthenticated, updateProduct)
export default router

router.post('/images/:id', isAuthenticated, singleUpload, addProductImage)
