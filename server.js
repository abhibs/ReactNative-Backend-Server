import { app } from './app.js'

app.get('', (req, res) => {
  res.send('Server is Working')
})

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on Port:${process.env.PORT}`)
})
