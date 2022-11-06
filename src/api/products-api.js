import defaultAxios from "axios";

const axios = defaultAxios.create({
  baseURL: "https://myjson.dit.upm.es/api/bins/3jnm",
  headers: {
    "Content-Type": "application/json",
  },
});

// Get first product
export const getProduct = async () => {
  try {
    const product = await axios.get();

    return product.data[0];
  } catch (err) {
    return console.error(err);
  }
};
