var express = require('express');
var router = express.Router();

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

module.exports = router;