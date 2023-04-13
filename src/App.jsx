import { Routes, Route } from "react-router-dom";
import { Home, Login, NotFound } from "./routes";
import { Navbar } from "./components";
import RequireAuth from "./components/RequireAuth";


const App = () => {


  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
};

export default App;