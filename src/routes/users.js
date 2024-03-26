const {Router} = require('express')

const router = Router()
router.get('/userName', (req, res) => {
    res.send('username page')
})

router.get('/profile', (req, res) => {
    res.send('profile page')
})

module.exports = router