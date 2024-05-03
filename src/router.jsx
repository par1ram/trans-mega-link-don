import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Students from "./pages/OurStudents.jsx";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/students", element: <Students /> },
  ]);