import express from 'express'
import {
  addCategory,
  addProduct,
  addProductImage,
  deleteProduct,
  deleteProductImage,
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
  .delete(isAuthenticated, deleteProduct)

router
  .route('/images/:id')
  .post(isAuthenticated, singleUpload, addProductImage)
  .delete(isAuthenticated, deleteProductImage)

router.post('/category/add', isAuthenticated, addCategory)

export default router
