const { Usuario } = require("../models/Usuario");
const { Jogo } = require("../models/Jogo");

module.exports.cadastro = function(application, req, res){
    res.render('cadastro', {validacao: {}, dadosForm: {}});
};

module.exports.cadastrar = function(application, req, res){
    var dadosForm = req.body;

    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();
    req.assert('casa', 'Casa não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
        return;
    }

    var usuario = new Usuario({
        nome: dadosForm.nome,
        usuario: dadosForm.usuario,
        senha: dadosForm.senha,
        casa: dadosForm.casa
    });

    usuario.save().then(() => {
        var jogo = new Jogo({
            usuario: usuario,
            moeda: 15,
            suditos: 10,
            temor: Math.floor(Math.random() * 1000),
            sabedoria: Math.floor(Math.random() * 1000),
            comercio: Math.floor(Math.random() * 1000),
            magia: Math.floor(Math.random() * 1000)
        })
        atributos = jogo;
        jogo.save();
        console.log("Usuário cadastrado com sucesso!");
        res.render('jogo', {img_casa: dadosForm.casa, atributos: jogo});
    }).catch(() => {
        console.log("Erro ao cadastrar o usuário!");
        res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
        return;
    })
};