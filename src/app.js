import express from "express";
import indexRoutes from "./routes/index.routes";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.use("/api/productos", indexRoutes);

export default app;
