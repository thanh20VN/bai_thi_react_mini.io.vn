import { useLayoutEffect, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../api";

function ConFirm() {
  const navigate = useNavigate();
  const [productslist, setProducts] = useState([]);
  const [userName, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [avatar, setAvatar] = useState("");


  useEffect(() => {
    fetchProducts(setProducts);
  }, []);
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  useLayoutEffect(() => {
    const Information = JSON.parse(localStorage.getItem("data-token"));
    setEmail(Information.email);
    setAvatar(Information.image);
    setUserName(Information.username);
  }, []);
  return (
    <>
      <div>
        <h3>
          Avatar: <img src={avatar} alt="" width="15%" />
        </h3>
      </div>
      <div>
        <h3>Email: {email}</h3>
      </div>
      <div>
        <h3>Username: {userName}</h3>
      </div>
      <button onClick={() => {
        localStorage.removeItem("token")
        localStorage.removeItem("data-token")
        navigate("/login")
      }}>Logout</button>
      {/* <button
        onClick={() => {
          Navigate("/products");
        }}
        >
        products
      </button> */}
      <div>
        <h1>Products:</h1>
        <ul>
          {productslist.map((product) => (
            <div key={product.id}>
              <li>{product.title} <button onClick={() => { handleProductClick(product.id); }}>Show product</button></li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ConFirm;
