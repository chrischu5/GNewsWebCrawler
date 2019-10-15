const router = require('express').Router();

const searchController = require('../controller/searchController');

router.get('/search', searchController.search);

module.exports = router;