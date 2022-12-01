import express from "express";
import dataBase from './databases/dataBase.js';
import crearProducto from "./controllers/ProductoController.js";
import productoRouter from "./routes/ProductoRoute.js";

app.use('/producto',productoRouter)

try{
     await dataBase.authenticate()
    console.log("conexion exitosa")
}catch(error){
    console.log(error)
}

const app=express();

app.listen(3100,()=>{
    console.log('servidor corriendo en el puerto 3100')
    console.log('http://localhost:3100')
})