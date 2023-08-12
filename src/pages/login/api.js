//import { useEffect } from "react";
import axios from "axios";

export function apiLogin(login, inputUser, inputPass, Navigate) {
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
