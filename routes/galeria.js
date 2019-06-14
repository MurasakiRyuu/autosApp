var express = require('express');
var router = express.Router();

router.get('/mazda', function (req, res, next){
//	rest.send("galeria mazda");

//	var data=[{}]; // arreglo de onjetos JSON

	var data={autos:[]}; 
	var auto={};

	auto=null;
	auto={};

	auto.nombre="Mazda 3";
	auto.foto="https://media.metrolatam.com/2017/06/07/screen-shot-20170607-at-6.11.52-pm-600x400.jpg";
	data.autos.push(auto);

	auto=null;
	auto={};

	auto.nombre="Mazda 6";
	auto.foto="https://mazkomazda.com/wp-content/uploads/2018/11/car-01-deep-crystal-blue-mica.png";
	data.autos.push(auto);

	auto=null;
	auto={};

	auto.nombre="Mazda CX-3";
	auto.foto="https://static.cargurus.com/images/site/2018/11/02/00/41/2019_mazda_cx-3_grand_touring_fwd-pic-4524241946458914224-640x480.jpeg";
	data.autos.push(auto);

	auto.nombre="Mazda CX-3";
	auto.foto="https://static.cargurus.com/images/site/2018/11/02/00/41/2019_mazda_cx-3_grand_touring_fwd-pic-4524241946458914224-640x480.jpeg";
	data.autos.push(auto);

	auto.nombre="Mazda CX-3";
	auto.foto="https://static.cargurus.com/images/site/2018/11/02/00/41/2019_mazda_cx-3_grand_touring_fwd-pic-4524241946458914224-640x480.jpeg";
	data.autos.push(auto);

	auto.nombre="Mazda CX-3";
	auto.foto="https://static.cargurus.com/images/site/2018/11/02/00/41/2019_mazda_cx-3_grand_touring_fwd-pic-4524241946458914224-640x480.jpeg";
	data.autos.push(auto);

	console.log(data);	

	res.render("./galeria/mazda", data);
});


module.exports = router;