import * as React from "react";
import { createRoot } from "react-dom/client";
import ErrorPage from "./error-page";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "./index.css";
import Navigation from "./Components/Navigation";
import Liste from "./Pages/Liste";
import Details from "./Pages/Details";
import Favoris from "./Pages/Favoris";
import AjoutRecette from "./Pages/AjoutRecette";
import ModifRecette from "./Pages/ModifRecette";



createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Outlet />}> {/* Utilisez Outlet pour afficher le contenu de la liste */}
          <Route index element={<Liste />} /> {/* Configurez la route vers la liste */}
          <Route path="recipe/:id" element={<Details />} />
          <Route path="favorites/" element={<Favoris />} />
          <Route path="add/" element={<AjoutRecette />} />
          <Route path="recipe/edit/:id" element={<ModifRecette />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
