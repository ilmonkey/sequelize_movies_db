var express = require('express');
var router = express.Router();
const siteController = require('../controllers/siteController') 


/* GET un array de todos las peliculas con un link con los detalles. */
router.get('/movies', siteController.all);
router.get('/movies/detail/:id', siteController.detail);
router.get('/movies/new', siteController.new);
router.get('/movies/recommended', siteController.recommend);

router.get('/movies/search', siteController.searchForm);
router.post('/search', siteController.search);

module.exports = router;
