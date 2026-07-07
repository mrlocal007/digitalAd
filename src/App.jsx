import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

function About() {
  return (
    <div className="pt-28 text-center text-5xl font-bold">
      About
    </div>
  );
}

function Services() {
  return (
    <div className="pt-28 text-center text-5xl font-bold">
      Services
    </div>
  );
}

function Products() {
  return (
    <div className="pt-28 text-center text-5xl font-bold">
      Products
    </div>
  );
}

function Contact() {
  return (
    <div className="pt-28 text-center text-5xl font-bold">
      Contact
    </div>
  );
}

export default function App() {

  return (

    <>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/products" element={<Products />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </>

  );

}