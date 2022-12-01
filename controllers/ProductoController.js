import Producto from "../models/ProducoModel"
//dentro de los parentesis ponemos (request,response)=peticion rspuesta
const crearProducto = async (req,res)=>{
    try {
        Producto.create(req.body)
        res.json({
            message:"Usuario creado corectamenete"
        })
    } catch (error) {
        res.json({
            message:"No se pudo registar ${error}"
        })
        
    }

}

const listarProductos = ()=>{

}

const listarProducto = ()=>{

}
const editarProducto = ()=>{

}
const eliminarProducto =()=>{

}
//cuando son varias funciones se deben exportar como  objeto 
export {
    crearProducto,
    listarProducto,
    listarProductos,
    editarProducto,
    eliminarProducto,
}