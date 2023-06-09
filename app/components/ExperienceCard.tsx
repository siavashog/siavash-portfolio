import React from 'react'
import {motion} from "framer-motion";
import azd from '@/public/azd.jpg'


type Props = {}

const ExperienceCard = ({}:Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[700px]
         w-[300px] md:w-[400px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
         cursor-pointer transition-opacity duration-200 overflow-hidden
         '>
            <motion.img
                initial={{
                    y:-100,
                    opacity:0
                }}
                whileInView={{
                    opacity:1,
                    y:0
                }}
                transition={{
                    duration:1.2,
                }}
                viewport={{
                    once:true
                }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
                object-cover object-center

                '
            // src='@/public/IMG_2946.jpg'
            src='https://res.cloudinary.com/dduqbb1yc/image/upload/v1685164963/vecteezy_ecommerce-logo-png_16016817_990_zk4ws1.png'
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>
                    ECCOMERCE APP
                </h4>
                <p className='font-bold text-2xl mt-1'>
                    shop
                </p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-10 w-10'
                        src='https://res.cloudinary.com/dduqbb1yc/image/upload/v1684911451/kisspng-javascript-angularjs-node-js-computer-icons-clip-a-clipart-js-5c0d8281ca7a10.3507952115443892498294_jcxcth.png'
                        alt=""/>
                    <img className='h-10 w-10'
                        src='https://res.cloudinary.com/dduqbb1yc/image/upload/v1684911451/kisspng-javascript-angularjs-node-js-computer-icons-clip-a-clipart-js-5c0d8281ca7a10.3507952115443892498294_jcxcth.png'
                        alt=""/>
                    <img className='h-10 w-10'
                        src='https://res.cloudinary.com/dduqbb1yc/image/upload/v1684911451/kisspng-javascript-angularjs-node-js-computer-icons-clip-a-clipart-js-5c0d8281ca7a10.3507952115443892498294_jcxcth.png'
                        alt=""/>

                </div>
                <p className='uppercase py-5 text-gray-300'>
                    Started at ... , finished at ...
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 pr-5
                 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80
                 '>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>

            </div>
        </article>
    )
}
export default ExperienceCard
