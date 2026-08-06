import React from "react";
import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ReviewsPage from "./pages/ReviewsPage";
import VisitPage from "./pages/VisitPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <SiteLayout>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/menu"
            element={<MenuPage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/reviews"
            element={<ReviewsPage />}
          />

          <Route
            path="/visit"
            element={<VisitPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          <Route
            path="*"
            element={<HomePage />}
          />
        </Routes>
      </SiteLayout>
    </HashRouter>
  );
}

export default App;