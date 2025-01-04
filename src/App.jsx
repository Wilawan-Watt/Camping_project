import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Activity from "./Component/Activity/Activity";
import Section from "./Component/Section/Section";
import Booking from "./Component/Booking/Booking";
import Gallery from "./Component/Gallery/Gallery";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Activity />
      <Section />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
