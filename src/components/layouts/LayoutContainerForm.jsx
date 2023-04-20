import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { useContext } from "react";


const LayoutContainerForm = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (user && (["/login", "/register"].some(path => location.pathname.includes(path)))) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mx-auto container">
      <Outlet />
    </div>
  );
};
export default LayoutContainerForm;
