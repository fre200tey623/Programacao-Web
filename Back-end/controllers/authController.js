const jwt = require('jsonwebtoken');
const catchAsync = require('./../utils/catchAsync');
const Usuario = require('./../models/usuarioModel');
const AppError = require('./../utils/appError');
const Local = require('./../models/localModel')


const {promisify} = require('util');

const signToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}


exports.validateToken = catchAsync (async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return next(new AppError('Voce nao está logado', 401));
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const usuario = await Usuario.findById(decoded.id);

    if (!usuario) {
        return next(new AppError('O usuario deste token nao existe', 401));
    }

    req.usuario = usuario
    next()
});


exports.signup = catchAsync(async (req, res, next) => {
    const newUsuario = await Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    });
    
    const token = signToken(newUsuario._id);
    
    res.status(200).json({
        status:'success',
        data: {
            token,
            nome: newUsuario.nome,
            email: newUsuario.email,
        }
    });
});

exports.login = catchAsync( async (req, res, next) => {
    const {email, senha, local} = req.body;
    if (!email && !senha) {
        return next(new AppError("É necessario fornecer o email e senha", 401));
    }

    const usuario = await Usuario.findOne({email}).select('+senha')

    if (!usuario || !await usuario.senhaCorreta(senha, usuario.senha)) {
        return next(new AppError('É necessario fornecer o email e senha corretos', 401));
    }

    if (!local) {
        return next(new AppError("É necessario fornecer o local", 401));
    }

    const newlocal = await Local.create({
        latitude: local.latitude,
        longitude: local.longitude,
        pais: local.pais,
        estado: local.estado,
        cidade: local.cidade
    })
    
    const token = signToken(usuario._id);

    res.status(200).json({
        status: 'success',
        data: {
            token,
            email: email,
            nome: usuario.nome,
            local: newlocal
        }
    })
})


