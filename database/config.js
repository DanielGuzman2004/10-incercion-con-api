const mongoose = require('mongoose')



//Establece la Conexion con el servidor
const dbConnetion=async()=>{
    try {
        mongoose.connect(process.env.MONGODB_CNN,{})
        console.log('conectado con el servidor')
    } catch (error) {
        console.log('Conexion no establecida')
    }
}

module.exports={
    dbConnetion//exporta la funcion dbConnetion
}