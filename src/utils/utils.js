import axios from "axios";

const URL = 'https://fakestoreapi.com/products?limit=5';

export const productsData = async () => {
    return await axios.get(`${URL}`)
        .then(res => res.data)
        .catch(err => console.log(err))
}