import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Pass current page from state, use function to update the page */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Render the current page */}
      {renderPage()}
      {/* Render footer */}
      <Footer />
    </div>
  );
}
