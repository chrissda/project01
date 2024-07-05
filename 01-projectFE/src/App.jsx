import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllProductsView from "./Views/AllProductsView";
import Navbar from "./components/Navbar";
import NavbarN from "./components/NavbarN";
import HomeN from "./Views/HomeN";


const App = () => {
  return (
      <Router>
        {/* <HomeN /> */}
        <NavbarN />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<AllProductsView />} />
        </Routes>
      </Router>
    );
};

export default App;

