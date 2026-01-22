import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PackageSelection from "./components/home/package/Package";
import OrderForm from "./components/formulir/Formulir";
import Layout from "./components/home/layouts/Layouts";
import Hero from "./components/home/hero-section/Hero";
import About from "./components/home/about/About";
import Tujuan from "./components/home/tujuan/Tujuan";
import Gallery from "./components/home/gallery/Gallery";
import WhatsappFloating from "./components/partials/WhatsappFloating";
import { useEffect } from "react";
import HeroEvent from "./components/home/hero-section/HeroEvent";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
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
                <HeroEvent />
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
