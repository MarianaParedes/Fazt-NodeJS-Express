
const express = require('express')
const morgan = require('morgan')
const path = require('path')
require('ejs')

const app = express()

const HomeRoutes = require('./routes/home')
const UserRoutes = require('./routes/users')

//settings
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//middleware
app.use(express.json())
app.use(morgan('dev'))

app.use(HomeRoutes)
app.use(UserRoutes)

app.get('/note.txt', (req, res) => {
    res.send('este no es un archivo')
})

//routes
app.use("/public", express.static(path.join(__dirname,'./public')))
app.use("/uploads", express.static(path.join(__dirname, './uploads')))

app.get('/dashboard', (req, res) => {
    res.send('Dashboard page')
}) 



app.listen(3000)
 console.log(`server on port ${3000}`)