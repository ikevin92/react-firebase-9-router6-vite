import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { LayoutContainerForm, LayoutRedirect, LayoutRequireAuth, Navbar } from "./components";
import { UserContext } from "./context/UserProvider";
import { Home, Login, NotFound, Perfil, Register } from "./routes";


const App = () => {

  const { user } = useContext(UserContext);

  if (user === false) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LayoutRequireAuth />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>

        <Route path="/" element={<LayoutContainerForm />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/:nanoid" element={<LayoutRedirect />}>
          <Route index element={<NotFound />} />
        </Route>

      </Routes>
    </>
  );
};

export default App;
