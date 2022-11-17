const {Schema,model}=require('mongoose')

const CompraSchema=Schema({
    N_factura:{
        type:Number
    },
    M_pago:{
        type:String
    },
    Fecha:{
        type:Date
    },
    Proveedor:{
        type:String
    },
    Producto:{
        type:String
    },
    Cantidad:{
        type:Number
    },
    Precio:{
        type:Number
    },
    Estado:{
        type:String
    },
})

module.exports=model('Compras',CompraSchema)