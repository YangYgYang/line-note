const express = require('express')
const app = express()
const port = 3000 || process.env.PORT


//==========template engine
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//==========setting static files
app.use(express.static('public'))


//==========line bot setting
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))


//require router引入routes就會自動去找目錄下index的檔案 為何(怎樣才會去去尋找？)
const routes = require('./routes')
app.use(routes)


app.listen(port, () => { console.log(`Express is running on http://localhost:${port}`) })