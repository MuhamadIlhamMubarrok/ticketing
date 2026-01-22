import "./App.css";
import Layout from "./components/home/layouts/Layouts";
import Hero from "./components/home/hero-section/Hero";
import About from "./components/home/about/About";
import Tujuan from "./components/home/tujuan/tujuan";
import Gallery from "./components/home/gallery/Gallery";
import WhatsappFloating from "./components/partials/WhatsappFloating";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Tujuan />
        <Gallery />
      </Layout>
      <WhatsappFloating />
    </>
  );
}

export default App;
