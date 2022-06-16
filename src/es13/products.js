import fetch from "node-fetch";

const response = fetch('https://api.escuelajs.co/api/v1/products');
const products = response.json();

export { products };