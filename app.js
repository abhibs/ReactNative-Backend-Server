import express from 'express'
import { config } from 'dotenv'
import user from './routes/user.js'
config({
  path: './data/config.env',
})

export const app = express()

app.use('/api/user', user)
