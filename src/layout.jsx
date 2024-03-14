import Footer from "./components/footer";
import Navbar from "./components/navbar";

// eslint-disable-next-line react/prop-types
export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
