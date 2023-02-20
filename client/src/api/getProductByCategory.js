import axios from 'axios';

export const getProductByCategory = (id) => {
    return axios.get(`http://127.0.0.1:8000/api/product/show_by_category/${id}`);
};
