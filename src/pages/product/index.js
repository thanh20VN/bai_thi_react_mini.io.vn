import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiProduct } from '../../api';

const Product = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    apiProduct(setProductData, productId)
  }, [productId]);

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
