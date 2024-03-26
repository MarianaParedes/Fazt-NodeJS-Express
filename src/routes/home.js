const {Router} = require('express')

const router = Router()

router.get('/', (req,res)=>{
   let isActive = false
   
   const users = [
    {
        id: 1,
        name: "ryan",
        lastname: "perez"
    },
    {
        id: 2,
        name: "joe",
        lastname:"mc ,illan"
    }

    ]



    res.render('index', {
        title: 'Index Page',
        isActive
    })
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router
