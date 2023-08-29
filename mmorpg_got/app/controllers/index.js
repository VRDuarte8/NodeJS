const { Jogo } = require("../models/Jogo");
const { Usuario } = require("../models/Usuario");

module.exports.index = function(application, req, res){
    res.render('index', {validacao: {}, dadosForm: {}});
};

module.exports.autenticar = function(application, req, res){
    var dadosForm = req.body;

    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('index', {validacao: erros, dadosForm: dadosForm});
        return;
    }

    Usuario.findOne({usuario: dadosForm.usuario, senha: dadosForm.senha}).exec().then((data) => {
        if (!data) {
            console.log("Usuario não encontrado");
            res.render('index', {validacao: {}, dadosForm: dadosForm});
        }
        if (data) {
          req.session.autorizado = true;
          req.session.usuario = data.usuario;
          req.session.casa = data.casa;
          Jogo.findOne({usuario: data._id}).exec().then((data) => {
            req.session.atributos = data;
            res.redirect('jogo');
          })
        }
      }).catch((err) => {
        console.log(err)
        res.render('index', {validacao: {}, dadosForm: dadosForm});
        return;
    })
};