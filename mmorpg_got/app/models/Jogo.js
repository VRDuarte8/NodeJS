const mongoose = require("mongoose");
const { Usuario } = require("./Usuario");

const { Schema } = mongoose;

const jogoSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    moeda: {
        type: Number,
        required: true
    },
    suditos: {
        type: Number,
        required: true
    },
    temor: {
        type: Number,
        required: true
    },
    sabedoria: {
        type: Number,
        required: true
    },
    comercio: {
        type: Number,
        required: true
    },
    magia: {
        type: Number,
        required: true
    }
},
    {timestamps: true}
);

const Jogo = mongoose.model("Jogo", jogoSchema);

module.exports = {
    Jogo
};