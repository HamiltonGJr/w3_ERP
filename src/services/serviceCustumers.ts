import api from "./settings";

const getCustomers = async () => {
  try {
    const response = await api.get("customers");
    return response.data;
  } catch (err) {
    console.log("Error no TryCatch 'servicegetCustomers': " + err);
  }
};

export default getCustomers;
