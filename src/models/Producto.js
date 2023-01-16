import { Schema, model } from "mongoose";

const productoSchema = new Schema(
  {
    descripcion: String,
    producto: String,
    disco: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Producto", productoSchema);
