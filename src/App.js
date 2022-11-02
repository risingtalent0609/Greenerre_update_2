import { Routes, Route } from "react-router-dom";

//import pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Project from "./pages/Projects/Project";
import OutreachEducation from "./pages/OutreachEducation/OutreachEducation";
import Advisor from "./pages/Advisors/Advisor";
import Token from "./pages/Token/Token";
import GreenDAOlaPage from "./pages/GreenDAOla/GreenDAOla";
import VPetsPage from "./pages/VPets/VPets";
import GreenerMarketPage from "./pages/GreenerMarket/GreenerMarket";
import ComingSoonPage from "./pages/ComingSoon/ComingSoon";

//import components
import Contact from "./components/Contact/Contact";
import NavbarMenu from "./components/Navbar/NavbarMenu";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}>
          <Route path=":id" element={<Services />} />
        </Route>
        <Route path="/project" element={<Project />} />
        <Route path="/outreach-education" element={<OutreachEducation />} />
        <Route path="/advisor" element={<Advisor />} />
        <Route path="/greendao" element={<Token />} />
        <Route path="/greenDAOla" element={<GreenDAOlaPage />} />
        <Route path="/vpets" element={<VPetsPage />} />
        <Route path="/market" element={<GreenerMarketPage />} />
        <Route path="/soon" element={<ComingSoonPage />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
