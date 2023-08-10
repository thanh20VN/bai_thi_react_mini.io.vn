import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConFirm from "./confirm";

function Profile() {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    const tokenlocal = localStorage.getItem("token");
    if (tokenlocal == null) {
      navigate("/login");
      alert("ê đăng nhập coi");
    } else {
      setConfirm(!confirm);
    }
  }, []);
  return <>{confirm && <ConFirm />}</>;
}

export default Profile;
