const express = require('express')
const app = express()
const router = express.Router()
const home = require('./modules/home')
const line = require('./modules/line')


router.use('/', home)
router.use('/webhook', line)




module.exports = router