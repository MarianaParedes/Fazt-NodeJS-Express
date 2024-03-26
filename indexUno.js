
const express = require('express')

const app = express()

app.use((req, res, next)=>{
    console.log(`Route: ${req.url} Metodo ${req.method}`)
})

app.use((req, res, next)=>{
    next()
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard page')
})

app.get('/profile', (req, res) => {
    res.send('profile page')
})

app.listen(3000)
 console.log(`server on port ${3000}`)