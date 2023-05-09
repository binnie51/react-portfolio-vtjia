import React, { useState } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function ContainerSite() {
    const [currentPage, setCurrentPage] = useState('Home');

    // Method to check the value of `currentPage`
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
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
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            <Footer />
        </div>
    );
}
