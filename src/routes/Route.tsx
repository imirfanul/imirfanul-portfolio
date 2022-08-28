import { Route, Routes } from "react-router";
import { useRoutes, useLocation } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

const Router = () => {
    const location = useLocation();
    /* nesting routes*/
    return (
        <Routes key={location.pathname} location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about/" element={<About />} />
            <Route path="/contact/" element={<Contact />} />
        </Routes>
    );
};
export default Router;
