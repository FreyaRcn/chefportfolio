import React from 'react'
import {logo} from "../../assets/index"
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full py-20 h-auto items-center border-b-[1px] border-b-black grid grid-cols-2 gap-8'>
        <div className='w-full h-full flex flex-col gap-8'>
            <img className='w-32' src={logo} alt='logo'/>
            <div className='flex gap-4'>
                <span className='bannerIcon'><FaFacebook/></span>
                <span className='bannerIcon'><FaInstagram/></span>
                <span className='bannerIcon'><FaPinterest/></span>
              </div>
        </div>
       
    </div>
  )
}

export default Footer