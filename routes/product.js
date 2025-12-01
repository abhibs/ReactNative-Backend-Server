import express from 'express'
import {
  addCategory,
  addProduct,
  addProductImage,
  deleteCategory,
  deleteProduct,
  deleteProductImage,
  getAllCategories,
  getAllProducts,
  productDetail,
  updateProduct,
} from '../controllers/product.js'
import { isAdmin, isAuthenticated } from '../middlewares/auth.js'
import { singleUpload } from '../middlewares/multer.js'

const router = express.Router()

router.get('/all', getAllProducts)
router.post('/add', isAuthenticated, isAdmin, singleUpload, addProduct)
router
  .route('/single/:id')
  .get(isAuthenticated, isAdmin, productDetail)
  .put(isAuthenticated, isAdmin, updateProduct)
  .delete(isAuthenticated, isAdmin, deleteProduct)

router
  .route('/images/:id')
  .post(isAuthenticated, isAdmin, singleUpload, addProductImage)
  .delete(isAuthenticated, isAdmin, deleteProductImage)

router.post('/category/add', isAuthenticated, isAdmin, addCategory)
router.get('/category/all', isAuthenticated, getAllCategories)
router.delete('/category/:id', isAuthenticated, isAdmin, deleteCategory)

export default router
