import { Route, Routes } from "react-router";
import { useRoutes ,useLocation} from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import About from "../pages/about/About";

const Router = () => {
    const location = useLocation();
    /* nesting routes*/
    return (
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<LandingPage />} />
        <Route path="about/" element={<About />} />
      </Routes>
    );
  

  };
  export default Router;