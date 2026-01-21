import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
