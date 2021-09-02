const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const route = require('./routes')
const db = require('./config/db')

//contect to DB

db.connect()

app.use(express.static(path.join(__dirname, 'public')))
    //HTTP logger
app.use(morgan('combined'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Templates engine [handlebar]
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

//route init
route(app)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})