module.exports.jogo = function(application, req, res){
    if(req.session.autorizado !== true){
        res.send('Usuário precisa fazer login');
        return;
    } 
    res.render('jogo', {img_casa: req.session.casa, atributos: req.session.atributos, validacao: {}});
};

module.exports.sair = function(application, req, res){
    req.session.destroy( function(err){
        res.render('index', {validacao: {}, dadosForm: {}});
    });
};

module.exports.suditos = function(application, req, res){
    if(req.session.autorizado !== true){
        res.send('Usuário precisa fazer login');
        return;
    }
    res.render('aldeoes', {validacao: {}, dadosForm: {}});
};

module.exports.pergaminhos = function(application, req, res){
    if(req.session.autorizado !== true){
        res.send('Usuário precisa fazer login');
        return;
    }
    res.render('pergaminhos', {validacao: {}, dadosForm: {}});
};

module.exports.ordenar_acao_sudito = function(application, req, res){
    if(req.session.autorizado !== true){
        res.send('Usuário precisa fazer login');
        return;
    }

    var dadosForm = req.body;
    req.assert('acao', 'Ação deve ser informada').notEmpty();
    req.assert('quantidade', "Quantidade deve ser informada").notEmpty();

    var erros = req.validationErrors();

    if(erros){
       res.render('jogo', {img_casa: req.session.casa, atributos: req.session.atributos, validacao: erros});
        return;
    }

    res.send('tudo ok!');
};
