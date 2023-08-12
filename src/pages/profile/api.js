import axios from "axios";

export const fetchProducts = async (setProducts) => {
    const response = await axios.get("https://dummyjson.com/products");
    const products = response.data.products;
    setProducts(products);
};