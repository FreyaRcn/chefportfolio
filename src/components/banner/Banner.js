import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { bannerImg } from "../../assets/index";

const Banner = () => {
    const [text] = useTypewriter({
        words: ["Professional Chef.", "Chocolate Lover.", "Tea Addict."],
        Loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
  return (
   <section id='home' className="w-full py-20 flex border-b-[1px] font-titleFont border-b-black">
   <div className="w-1/2 flex flex-col gap-20">
    <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY KITCHEN</h4>
        <h1 className="text-6xl font-bold text-white">Hi, I'm {" "}<span className="text-designColor capitalize">Freya Arcena</span></h1>
        <h2 className="text-4xl font-bold text-white">a <span>{text}</span>
        <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
        />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
            Lorem, ipsum facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in
        </p>
    </div>
<div>
    <div>
       <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
       <div className="flex gap-4">
        <span className="bannerIcon">
            <FaFacebook/>
        </span>
        <span className="bannerIcon">
            <FaInstagram/>
        </span>
        <span className="bannerIcon">
            <FaPinterest/>
        </span>
       </div> 
    </div>
   </div>
</div>
<div className="w-1/2 flex justify-center items-center">
    <img className="w-[450px] h-[400px] z-10" src={bannerImg} alt="bannerImg"/>
    
</div>
   </section>
  )
}

export default Banner