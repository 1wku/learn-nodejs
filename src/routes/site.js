const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/siteController')

router.get('/search', newsController.search)
router.get('/', newsController.home)

module.exports = router
