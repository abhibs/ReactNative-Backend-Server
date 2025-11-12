import express from 'express'
import { config } from 'dotenv'
import user from './routes/user.js'
import { errorMiddleware } from './middlewares/error.js'
config({
  path: './data/config.env',
})

export const app = express()
app.use(express.json())

app.use('/api/user', user)

app.use(errorMiddleware)
