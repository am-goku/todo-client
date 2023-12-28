import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Protect = ({ children }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.userData);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  if (user) {
    return children;
  }
};

export default Protect;
