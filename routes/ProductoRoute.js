import { Express } from "express";
import { crearProducto } from "../controllers/ProductoController";

const productoRouter = express.Router()
//post es crear 
productoRouter.post('/',crearProducto)

export default productoRouter;
