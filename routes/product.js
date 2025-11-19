import express from 'express'

const router = express.Router()

router.get('/all', (req, res) => {
  res.send('all product list')
})

export default router
