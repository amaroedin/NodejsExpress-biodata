var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Biodata',
  	nama: 'Amarudin',
  	instansi: 'Universita Mercubuana Yogyakarta',
  	jurusan: 'Teknik Informatika',
  	tahun_angkatan: '2012',
  	email: 'amarudhien@gmail.com',
  	deskripsi: 'Dalam mengikuti workshop ini saya ingin belajar fullstak javascript menggunakan nodejs dan express framework',
  });
});

module.exports = router;
