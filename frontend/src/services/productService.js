import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchProducts = async(search) => {
    const res = await axios.get(`${BASE_URL}/products`,{
        params : search ? {search} : {},
    });
    return res.data;
}

export const fetchProductById = async(id) =>{
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    return res.data;
}