import { connect, set } from "mongoose";

(async () => {
  try {
    set("strictQuery", false);
    const db = await connect("mongodb+srv://admin:admin@cluster0.zkaz1ia.mongodb.net/?retryWrites=true&w=majority");
    console.log("DB CONNECTED", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
