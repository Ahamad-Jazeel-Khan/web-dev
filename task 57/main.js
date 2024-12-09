const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.get('/about', (req, res) => {
  res.send('About us')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

app.get('/blog/:slug',(req, res) => {
  //logic to fetch {slug} from the db
  // For URL: http://localhost:3000/blog/intro-to-mongo?mode=dark$region=in
  console.log(req.params)//will output { slug: 'intro-to -mongo' }
  console.log(req.query)//will output { mode: 'dark', region: 'in' }
  res.send(`Hellow ${req.params.slug}`)
})


// app.get('/blog/intro-to-js', (req, res) => {
//   //logic to fetch intro to js from the db
//   res.send('Hello intro-to-jst!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   //logic to fetch intro to python from the db
//   res.send('Hello intro-to-python!')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})