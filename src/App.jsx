import { Routes, Route } from "react-router-dom";

import Navbar from "/src/components/layout/Navbar";
import Footer from "/src/components/layout/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Capabilities from "/src/data/capabilities";
import Platforms from "/src/data/products";


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



export default function App() {

    return (

        <>

            <Navbar />


            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/Services" element={<Capabilities />} />

                <Route path="/products" element={<Platforms />} />

                <Route path="/contact" element={<Contact />} />

            </Routes>


            <Footer />


        </>

    );

}