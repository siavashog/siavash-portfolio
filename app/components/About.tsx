import React from 'react'
import {motion} from "framer-motion";
import Image from "next/image";

type Props = {}
const About = ({} : Props) => {
    return (
        <motion.div
            initial={{
                opacity:0,
            }}
            whileInView={{
                opacity:1
            }}
            transition={{
                duration:1.5
            }}
            className='flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center
        '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                initial={{
                    x:-200,
                    opacity:0
                }}
                whileInView={{
                    opacity:1,
                    x:0
                }}
                transition={{
                    duration:1.2,
                }}
                viewport={{
                    once:true
                }}
                className=' mr-[26px] -mb-20 md:mb-0 flex-shrink-0
                w-56 h-42 rounded-full object-cover
                md:rounded-lg md:w-[350px] md:h-[450px] xl:w-[400px] xl:h-[500px]

                '
            // src='@/public/IMG_2946.jpg'
            src='https://res.cloudinary.com/dduqbb1yc/image/upload/v1684853471/IMG_2946_Large_zghq4d.jpg'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                </h4>
                <p className='text-base'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I'm Siavash, You might also know me as siavsh_og.As a Full Stack Developer, I Study Computer Science in Kharazmi University.I am a photographer and a video&photo editor,I use nextJs framework for web development, I also can use <span className='text-[#F7AB0A] ' > django</span>, <span className='text-[#F7AB0A] ' >node js</span>, <span className='text-[#F7AB0A] ' >reactJs</span>.

                </p>
            </div>


        </motion.div>
    )
}
export default About
