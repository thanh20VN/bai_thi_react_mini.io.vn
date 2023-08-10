import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Product from "./pages/product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" >
          <Route path=":productId" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
