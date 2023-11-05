import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN_STRING);
    console.log("Database conected 🚀");
  } catch (error) {
    console.log(error.message);
    throw new Error("Error en la coneccion de la DB - Ver logs");
  }
};
