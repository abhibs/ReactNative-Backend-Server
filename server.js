import { app } from './app.js'

app.get('', (req, res) => {
  res.send('Server is Working')
})

app.listen(1997, () => {
  console.log(`Server Listening on Port:1997`)
})
