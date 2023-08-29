require('dotenv').config();
const mongoose = require('mongoose');

async function connMongoDB() {
  try{
    await mongoose.connect(/*process.env.MONGO_URI*/'mongodb+srv://viniciusrduarte8:mdbVrd6870@cluster0.gelsitl.mongodb.net/got?retryWrites=true&w=majority');
    console.log('Conectado ao MongoDB!')
  } catch(error) {
    console.log('Erro ao conectar ao MongoDB');
  } 
}

module.exports = connMongoDB;

