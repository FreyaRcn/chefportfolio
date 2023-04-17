import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features"
import Projects from "./components/projects/Projects"
import Testimonial from "./components/testimonial/Testimonial";
import Contacts from "./components/contact/Contacts";
import Footer from "./components/footer/Footer"
import FooterBottom from "./components/footer/FooterBottom";



function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
      <Navbar />
      <Banner />
      <Features />
      <Projects />
      <Testimonial />
      <Contacts/>
      <Footer/>
      <FooterBottom/>
      </div>
    </div>
  );
}

export default App;
