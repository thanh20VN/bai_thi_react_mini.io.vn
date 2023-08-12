import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "./api";

function Login() {
  const Navigate = useNavigate();
  const [inputUser, setInputUser] = useState(""),
    [login, setLogin] = useState(false),
    [inputPass, setInputPass] = useState("");
  useEffect(() => {
    apiLogin(login, inputUser, inputPass, Navigate)
  }, [login])

  return (
    <div>
      <div>
        <h4>Username</h4>
        <input
          type="text"
          onChange={(e) => {
            setInputUser(e.target.value);
          }}
        />
      </div>
      <div>
        <h4>Password</h4>
        <input
          type="password"
          onChange={(e) => {
            setInputPass(e.target.value);
          }}
        />
      </div>
      <button onClick={() => setLogin(!login)}>Login</button>
    </div>
  );
}

export default Login;
