import { Router } from "express";
import * as productoCtrl from "../controllers/producto.controller";

const router = Router();

router.get("/", productoCtrl.getProductos);

router.post("/", productoCtrl.crearProducto);

router.delete("/:id", productoCtrl.borrarProducto);

router.put("/:id", productoCtrl.actualizarProducto);

export default router;
