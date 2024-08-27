var express = require('express');
var router = express.Router();
// var usuariosModel = require('./../../models/usuariosModel');


router.get('/', function (req, res, next) {
  res.render('admin/login', { //los render no usan barra para la primera carpeta, esto significa carpeta  view/admin/login.hbs
    layout: 'admin/layout' // significa /view/admin/layout.hbs
  });
});


router.get('/logout', function (req, res, next) {
  req.session.destroy(); //destruir las variables de sesión (id y usuario)
  res.render('admin/login', {
    layout: 'admin/layout'
  });
}); //cierro logout

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario; //estas variables capturan la info
    var password = req.body.password;

    //el await sirve para darle un cierre a la funcion async para que busque y le pase lo que se almacena//
    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true

      });
    }
  } catch (error) {
    console.log(error);
  }

}); //cierro router.post


module.exports = router;