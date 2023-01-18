import Producto from "../models/Producto";

export const getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Algo salio mal al obtener los productos",
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto({
      descripcion: req.body.descripcion,
      producto: req.body.producto,
      disco: req.body.disco,
    });
    const productoGuardado = await nuevoProducto.save();
    res.json(productoGuardado);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Algo salio mal al crear el producto",
    });
  }
};

export const borrarProducto = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json({
    message: `Producto eliminado correctamente`,
  });
};

export const actualizarProducto = async (req, res) => {
  await Producto.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    message: `Producto actualizado correctamente`,
  });
};
