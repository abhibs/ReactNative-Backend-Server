import { asyncError } from '../middlewares/error.js'
import { Product } from '../models/product.js'
import ErrorHandler from '../utils/error.js'
import { getDataUri } from '../utils/features.js'
import cloudinary from 'cloudinary'

export const getAllProducts = asyncError(async (req, res) => {
  const products = await Product.find({})
  res.status(200).json({
    success: true,
    products,
  })
})

export const addProduct = asyncError(async (req, res, next) => {
  const { name, description, category, price, stock } = req.body

  if (!req.file) return next(new ErrorHandler('Please add image', 400))

  const file = getDataUri(req.file)
  const myCloud = await cloudinary.v2.uploader.upload(file.content)
  const image = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  }

  await Product.create({
    name,
    description,
    category,
    price,
    stock,
    images: [image],
  })

  res.status(200).json({
    success: true,
    message: 'Product Created Successfully',
  })
})

export const productDetail = asyncError(async (req, res) => {
  // await res.send("Product Detail Page")
  const product = await Product.findById(req.params.id)

  if (!product) return next(new ErrorHandler('Product not found', 404))

  res.status(200).json({
    success: true,
    product,
  })
})

export const updateProduct = asyncError(async (req, res, next) => {
  // res.send('Product Update')
  const { name, description, category, price, stock } = req.body

  const product = await Product.findById(req.params.id)
  if (!product) return next(new ErrorHandler('Product not found', 404))

  if (name) product.name = name
  if (description) product.description = description
  if (category) product.category = category
  if (price) product.price = price
  if (stock) product.stock = stock

  await product.save()

  res.status(200).json({
    success: true,
    message: 'Product Updated Successfully',
  })
})
