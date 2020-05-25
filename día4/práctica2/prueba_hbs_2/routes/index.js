var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/saluda',(req,res,next)=>
  res.render('hola',{nombre:'Luis',
      colores:[
        {id:1, nombre:"rojo"},
        {id:2, nombre:"verde"},
        {id:3, nombre:"azul"},
        {id:4, nombre:"blanco"}
      ]})
);
router.get('/alta',(req,res,next)=>{
  res.render('alta_comic',{});
});
router.post('/grabar',(req,res,next)=>{
  console.log(req.body);
  var nombre=req.body.nombre;
  var url=req.body.url;
  var poder=req.body.poder;
});

module.exports = router;
