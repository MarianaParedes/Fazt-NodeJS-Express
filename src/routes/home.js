const {Router} = require('express')

const router = Router()

router.all('/about', (req, res) => {
    const title = 'ejs'
    
    res.render('index', { title })
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard page')
    // res.sendFile('Dashboard page')
})

module.exports = router
