import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from '../projects/ProjectCard'
import { projectOne } from '../../assets/index'
import { projectTwo } from '../../assets/index'
import { projectThree } from '../../assets/index'
import { projectFour } from '../../assets/index'
import { projectFive } from '../../assets/index'
import { projectSix } from '../../assets/index'

const Projects = () => {
  return (
    <section id="projects"
    className='w-full py-20 border-b-[1px] border-b-black'
    >
        <div className='flex justify-center items-center text-center'>
            <Title
            title="VISIT MY PAGE AND KEEP YOUR FEEDBACK"
            des="My Creations"
            />
        </div>
        <div className='grid grid-cols-3 gap-14'>
            <ProjectCard 
                title="DESSERTS"
                des="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor."
                src={projectOne}
            />
            <ProjectCard 
                title="ITALIAN"
                des="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor."
                src={projectTwo}
            />
            <ProjectCard 
                title="CHINESE"
                des="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor."
                src={projectThree}
            />
            <ProjectCard 
                title="JAPANESE"
                des="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor."
                src={projectFour}
            />
            <ProjectCard 
                title="ROASTS"
                des="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor."
                src={projectFive}
            />
            <ProjectCard 
                title="SALADS"
                des="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor."
                src={projectSix}
            />
        </div>
    </section>
  )
}

export default Projects