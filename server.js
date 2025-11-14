import { app } from './app.js'
import { connectDB } from './data/database.js'
import cloudinary from 'cloudinary'
app.get('', (req, res) => {
  res.send('Server is Working')
})

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRATE,
})

connectDB()

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on Port:${process.env.PORT}`)
})
