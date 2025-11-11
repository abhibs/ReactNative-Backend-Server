import { app } from './app.js'
import { connectDB } from './data/database.js'

app.get('', (req, res) => {
  res.send('Server is Working')
})

connectDB()

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on Port:${process.env.PORT}`)
})
