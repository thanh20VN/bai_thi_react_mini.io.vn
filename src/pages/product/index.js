import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState({});
  const navigate = useNavigate()

  useEffect(() => {

    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => {
        const products = response.data;
        console.log(products);
        setProductData(products);
      })
      .catch(error => {
        console.log(error);
        // Xử lý lỗi lấy thông tin sản phẩm
      });
  }, [productId]);

  // productData.forEach(product => {
  //   // ...
  // });

  return (
    <div>
      <h1>{productData.title}</h1>
      <img src={productData.thumbnail} alt={productData.title} />
      <p>brand: {productData.brand}</p>
      <p>description: {productData.description}</p>
      <p>price: {productData.price}$</p>
      <button onClick={() => {
        navigate("/profile")
      }}>Go back</button>
    </div>
  );
};

export default Product;
