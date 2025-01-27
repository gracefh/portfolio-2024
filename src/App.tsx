
import './App.css';

import { Outlet } from "react-router-dom";
import { NavBar } from './layout/navBar';
import { Footer } from './layout/footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
