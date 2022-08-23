import React, { useState } from "react";
// import ContainerSite from "./components/ContainerSite";

// Import page components
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from './components/pages/Contact';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';

// library.add(fab)

// The whole app containing the app's body from Navbar to footer
function App() {
  const [currentPage, setCurrentPage] = useState('Hero');

    // Method to check the value of `currentPage`
    const renderPage = () => {
        if (currentPage === 'Hero') {
            return <Hero />;
        }

        if (currentPage === 'About') {
            return <About />;
        }

        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }

        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);
  return (
    // <ContainerSite />
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;