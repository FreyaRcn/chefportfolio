import React from 'react'
import Title from '../layouts/Title';
import { GiCookingPot } from "react-icons/gi";
import { BiBaguette } from "react-icons/bi";
import Card from './Card';
import { cateringImg } from '../../assets/index';
import { bakingImg } from '../../assets/index';



const Feature = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do"/>
    <div className="grid grid-col-2 gap-20">
      <div>
      <img src={cateringImg} alt='cateringImg'/>
      <Card
      title="Catering"
      des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      icon={<GiCookingPot/>}
      />
      </div>
      <div>
      <img src={bakingImg} alt='bakingImg'/>
      <Card
      title="Baking"
      des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      icon={<BiBaguette/>}
      />
      </div>
    </div>
    </section>
  )
}

export default Feature