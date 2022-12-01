import dataBase from "../databases/dataBase.js";
import { DataTypes } from "sequelize";

// aca se deben de poner asi cuando es algo que el usuario va a ingresar
const Producto = dataBase.define('producto',{
    nombre:{
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.STRING
    }
})

export default Producto;