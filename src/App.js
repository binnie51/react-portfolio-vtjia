import React from "react";
// import ContainerSite from "./components/ContainerSite";

// Import page components
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Hero from "./components/pages/Hero";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';

// library.add(fab)

// The whole app containing the app's body from Navbar to footer
function App() {
  return (
    // <ContainerSite />
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;