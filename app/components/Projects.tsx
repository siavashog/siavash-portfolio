import React from 'react'
import {motion} from "framer-motion";

import {projects} from "@/app/constants2"
import Link from "next/link";
type Props = {}
const Projects = ({}: Props) => {
    // const projects1 = [1, 2, 3, 4, 5]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left
        md:flex-row max-w-full justify-evenly mx-auto items-center z-0
        '>
                <h3 className='absolute top-14 ml-10 uppercase tracking-[20px] text-gray-500 text-2xl'>
                    Projects
                </h3>

            <div className='relative w-full flex overflow-x-scroll
            overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin
            '>
                {projects.map((project, i) => (
                    <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-20 md:p-44 h-screen
                    '>
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration:1.2 }}
                            whileInView={{ opacity:1, y:0 }}
                            viewport={{ once: true }}
                            className='h-64'
                             src="https://res.cloudinary.com/dduqbb1yc/image/upload/v1684301268/my-uploads1/wcuk9r08giw9w4tputsq.png"
                             alt=""/>
                        <div className='flex flex-col space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                Web Projects <span className='underline decoration-[#F7AB0A]/50'>{i + 1}
                            </span> of <span className='underline decoration-[#F7AB0A]/50'>{projects.length}</span>
                            </h4>
                            <div className='flex justify-center'>
                            <button className='flex text-center items-center
                            hover:rounded-md hover:border-black/50 text-sm hover:text-base
                             focus:bg-gray1 hover:shadow-2xl hover:scale-[102%] duration-200
                             border border-2 border-black justify-center px-6 py-3 w-64'>

                                {/*// @ts-ignore*/}
                                <Link href={project.href}>

                                GO TO PROJECT
                                </Link>
                            </button>
                            </div>
                            <p className='text-lg text-center md:text-left'>
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>

            <div className='w-full absolute top-[30%] bg-[#7F7F7F]/10 left-0 h-[500px]
            -skew-y-12

            '/>
        </motion.div>
    )
}
export default Projects
