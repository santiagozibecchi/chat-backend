export const dbConnection = async () => {
  try {
  } catch (error) {
    console.log(error.message);
    throw new Error("Error en la coneccion de la DB - Ver logs");
  }
};
