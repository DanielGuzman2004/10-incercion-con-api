const {Router}=require('express')
const router =Router()//obtener la funcion router

const {getcompras, postcompras,deletecompras,putcompras, patchcompras}=require('../controllers/compras')
router.get('/',getcompras)
router.post('/',postcompras)
router.delete('/',deletecompras)
router.put('/',putcompras)
router.patch('/',patchcompras)

// Exportar modulo
module.exports=router
