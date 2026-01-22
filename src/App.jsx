import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PackageSelection from "./components/home/package/Package";
import OrderForm from "./components/formulir/Formulir";
import Layout from "./components/home/layouts/Layouts";
import Hero from "./components/home/hero-section/Hero";
import About from "./components/home/about/About";
import Tujuan from "./components/home/tujuan/tujuan";
import Gallery from "./components/home/gallery/Gallery";
import WhatsappFloating from "./components/partials/WhatsappFloating";

function App() {
  return (
    <Router basename="/ticketing">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout>
                <Hero />
                <About />
                <Tujuan />
                <PackageSelection />
                <Gallery />
              </Layout>
              <WhatsappFloating />
            </>
          }
        />

        <Route path="/order" element={<OrderForm />} />
      </Routes>
    </Router>
  );
}

export default App;
