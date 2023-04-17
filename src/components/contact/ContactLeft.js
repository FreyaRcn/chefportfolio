import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { contactImg } from '../../assets/index';

const ContactLeft = () => {
  return (
    <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
            <img
            className='w-full h-64 object-cover rounded-lg mb-2'
            src={contactImg} alt='contactImg'/>
            <div className='flex flex-col gap-4'>
              <h3 className='text-3xl font-bold text-white'>Freya Arcena</h3>
              <p className='text-lg font-normal text-gray-400'>Professional Chef</p>
              <p className='text-base text-gray-400 tracking-wide'>Phone: <span className='text-lightText'>09452762966</span></p>
              <p className='text-base text-gray-400 tracking-wide'>Email:{" "} <span className='text-lightText'>angelica.f.arcena@outlook.com</span></p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2>FIND ME IN</h2>
              <div className='flex gap-4'>
                <span className='bannerIcon'><FaFacebook/></span>
                <span className='bannerIcon'><FaInstagram/></span>
                <span className='bannerIcon'><FaPinterest/></span>
              </div>
            </div>
          </div>
  )
}

export default ContactLeft