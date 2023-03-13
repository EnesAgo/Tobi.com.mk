import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './generalStyle.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Contact from "./views/contact/Contact";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <>

      <Header />

      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route path='*' element={<NotFound />} />

      </Routes>

      <Footer />



    </>
  );
}

export default App;
