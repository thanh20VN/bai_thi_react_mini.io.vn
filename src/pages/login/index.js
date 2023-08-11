import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const Navigate = useNavigate();
  const [inputUser, setInputUser] = useState(""),
    [login, setLogin] = useState(false),
    [inputPass, setInputPass] = useState("");

  useEffect(() => {
    if (login === true) {
      axios
        .post("https://dummyjson.com/auth/login", {
          username: inputUser,
          password: inputPass,
        })
        .then(function (response) {
          localStorage.setItem("token", response.data.token);
          //console.log(response);
          localStorage.setItem("data-token", JSON.stringify(response.data));
          Navigate("/profile");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [login]);

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
