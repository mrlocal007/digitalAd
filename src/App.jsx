import { Routes, Route } from "react-router-dom";

import Navbar from "/src/components/layout/Navbar";
import Footer from "/src/components/layout/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "/src/pages/About";
import Services from "/src/pages/Services";
import Solutions from "/src/pages/Solutions";

import BusinessSnapshot from "./pages/BusinessSnapshot";

import Studio from "/src/pages/Studio";



export default function App() {

    return (

        <>

            <Navbar />


            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/snapshot" element={<BusinessSnapshot />} />

                <Route path="/about" element={<About />} />

                <Route path="/services" element={<Services />} />

                <Route path="/solutions" element={<Solutions />} />

                <Route path="/studio" element={<Studio />} />

                <Route path="/contact" element={<Contact />} />

            </Routes>


            <Footer />


        </>

    );

}