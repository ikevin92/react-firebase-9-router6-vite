import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Title from "../Title";


const LayoutRedirect = () => {
  const { nanoid } = useParams();
  const [loading, setLoading] = useState(true);

  if (loading) return <Title text="Cargando redireccionamiento..." />;


  return (
    <div className="mx-auto container">
      <Outlet />
    </div>
  );
};

export default LayoutRedirect;
