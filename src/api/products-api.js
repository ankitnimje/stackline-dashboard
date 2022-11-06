import defaultAxios from "axios";

const axios = defaultAxios.create({
  baseURL: "http://myjson.dit.upm.es/api/bins/3jnm",
  headers: {
    "Content-Type": "application/json",
  },
});

// Get All Todos
export const getProduct = async () => {
  try {
    const product = await axios.get();

    return product.data[0];
  } catch (err) {
    return console.error(err);
  }
};
