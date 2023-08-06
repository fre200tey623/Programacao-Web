const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const bcrypt = require('bcrypt');

const usuarioSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        select: false 
    }
});

usuarioSchema.pre('save', async function(next) {
    this.senha = await bcrypt.hash(this.senha, 13);
    next();
});

usuarioSchema.methods.senhaCorreta = async function(senhaTeste, senhaOriginal) {
    return await bcrypt.compare(senhaTeste, senhaOriginal);
};

const Usuario = model('Usuario', usuarioSchema);

module.exports = Usuario;