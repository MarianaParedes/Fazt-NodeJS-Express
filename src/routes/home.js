const {Router} = require('express')

const router = Router()

router.get('/', (req,res)=>{
    const title ='index page'
    res.render('index', {title: title})
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router
