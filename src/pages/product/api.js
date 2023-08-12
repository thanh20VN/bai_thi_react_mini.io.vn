import axios from 'axios';

export function apiProduct(setProductData, productId) {
    axios.get(`https://dummyjson.com/products/${productId}`)
        .then(response => {
            const products = response.data;
            //console.log(products);
            setProductData(products);
        })
        .catch(error => {
            console.log(error);
            // Xử lý lỗi lấy thông tin sản phẩm
        });
}