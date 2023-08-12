//import { useEffect } from "react";
import axios from "axios";

function apiLogin(login, inputUser, inputPass, Navigate) {
    if (login === true) {
        axios
            .post("https://dummyjson.com/auth/login", {
                username: inputUser,
                password: inputPass,
            })
            .then(function (response) {
                //if (response.status == 400) {
                //  alert("sai rồi kìa")
                // } else {
                // localStorage.setItem("token", response.data.token);
                // localStorage.setItem("data-token", JSON.stringify(response.data));
                // Navigate("/profile");
                // }
                //console.log(response.status)
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("data-token", JSON.stringify(response.data));
                Navigate("/profile");
            })
            .catch(function () {
                alert("sai thông tin rồi bạn");
                //console.log(error);
            });
    }
}


function apiProduct(setProductData, productId) {
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

const fetchProducts = async (setProducts) => {
    const response = await axios.get("https://dummyjson.com/products");
    const products = response.data.products;
    setProducts(products);
};

export { fetchProducts, apiLogin, apiProduct }