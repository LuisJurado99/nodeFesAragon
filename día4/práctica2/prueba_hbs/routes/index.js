var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


routet.post('/',function (req,res,next) {
  res.render('mi_pagina',{nombre: 'Luis', carrera: 'ICO'})
});

module.exports = router;
