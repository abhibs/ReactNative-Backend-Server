import express from 'express'

const router = express.Router()

router.get('/abhiram', (req, res, next) => {
  res.send('Abhiram B S Javalli Tudoor Thirthahalli Shimoga')
})

export default router
