import api from "./settings";

const getProducts = async () => {
  try {
    const response = await api.get("products");
    return response.data;
  } catch (err) {
    console.log("Error no TryCatch 'serviceProducts': " + err);
  }
};

export default getProducts;
