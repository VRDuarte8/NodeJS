require('dotenv').config();
const mongoose = require('mongoose');

async function connMongoDB() {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado ao MongoDB!')
  } catch(error) {
    console.log('Erro ao conectar ao MongoDB');
  } 
}

module.exports = connMongoDB;

