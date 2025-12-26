import "./App.css";

import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "./layout/navBar";
import { Footer } from "./layout/footer";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/" ? (
        <Outlet />
      ) : (
        <>
          <NavBar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
