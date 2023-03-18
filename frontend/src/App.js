import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './generalStyle.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Contact from "./views/contact/Contact";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Products from "./views/Products/Products";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import About from "./views/about/About";
import Services from "./views/services/Services";

function App() {
  return (
    <>

      <Header />
      <Wallpaper />

      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/products" element={<Products />} />

        <Route exact path="/services" element={<Services />} />

        <Route exact path="/about" element={<About />} />

        <Route path='*' element={<NotFound />} />

      </Routes>

      <Footer />



    </>
  );
}

export default App;
