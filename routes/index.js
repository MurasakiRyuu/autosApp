var express = require('express');
var router = express.Router();

var mongoose=require('mongoose');
var Mazda=require('../models/autos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AutosApp' });
});

router.get('/mazda', function(req, res, next){
	var infoMazda={};
	infoMazda.pais='Japón';
	infoMazda.sectorVentas='Comercial';
	infoMazda.fundacion=1929;
	infoMazda.logo="https://www.mazda.mx/siteassets/mazda-mx/logos-new-mazda/mazda-logo-desktop-2.png";
	res.render('mazda', infoMazda);

});

router.get('/nissan', function(req, res, next){

	var infoNissan={};
	infoNissan.pais='Japón';
	infoNissan.sectorVentas='Comercial';
	infoNissan.fundacion=1933;
	infoNissan.logo="https://png.pngtree.com/element_pic/17/09/03/be7a431f5d461d9fff00ed99ea170e18.jpg";
	res.render('nissan', infoNissan);
});

router.post('/alta', function(req, res, next){
	//crear un objeto mongo
	//hacer el insert

	var miMazda=Mazda({
		nombre:req.body.nombre,
		foto:req.body.foto
	});

	miMazda.save( function(err, data){
		if(err) { console.log('error');}
		else{
			res.render('resultadoAlta', data);
		}
	});



});


module.exports = router;