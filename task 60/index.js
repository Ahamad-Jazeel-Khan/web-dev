const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
  res.render("index.ejs" , {siteName:siteName , searchText:searchText})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when"
    let blogContent = "its a very good brand"
  res.render("blogpost", {blogTitle: blogTitle , blogContent: blogContent})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
