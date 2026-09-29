import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Admin from "../pages/Admin/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ← общий лейаут для всех страниц
    children: [
      { path: "", element: <Home /> }, // главная (/)
      { path: "portfolio", element: <Portfolio /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "admin", element: <Admin /> }, // админка (/admin)
    ],
  },
]);
