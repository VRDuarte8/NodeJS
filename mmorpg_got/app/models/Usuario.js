const mongoose = require("mongoose");

const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    casa: {
        type: String,
        required: true
    },
},
    {timestamps: true}
);

const Usuario = mongoose.models.Usuario || mongoose.model("Usuario", usuarioSchema);

module.exports = {
    Usuario
};
