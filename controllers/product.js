import { asyncError } from '../middlewares/error.js'
import { Product } from '../models/product.js'

export const getAllProducts = asyncError(async (req, res) => {
  const products = await Product.find({})
  res.status(200).json({
    success: true,
    products,
  })
})
