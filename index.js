import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.resolve('./dist')))

/*app.get('/', (req, res) => {
  res.send('Hello World')
})*/

app.listen(3000)