import React from 'react'
import Link from "next/link";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "@/app/components/BackgroundCircles";
import Image from "next/image";
import ProfilePic from '@/public/Main.jpg'
import Main from '@/public/Main.jpg'


type Props = {}
const Hero = ({}: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Siavash Maghsoudi",
            "<SIAVASH OG/>"
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-[810px] flex flex-col space-y-10 items-center
        justify-center text-center overflow-hidden'>
            <div className='pt-40'>

            <BackgroundCircles/>
            </div>
            <Image
                className='
                h-32
                w-32
                mx-auto
                object-cover
                relative
                rounded-full
            '
                src={Main}
                alt={'profile'}
            
            />
            <div className='z-20'>
                <div className='-mt-8'>
                    <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                        software engineer
                    </h2>
                    <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                        photographer
                    </h2>
                    <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                        editor
                    </h2>
                </div>
                <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
            <span className='mr-3'>
                {text}
            </span>
                    <Cursor cursorColor="#F7AB0A"/>
                </h1>
                <div className='pt-5'>
                    <a href='/#about'>
                        <button className='heroButton'>About</button>
                    </a>
                    <a href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </a>
                    <a href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </a>
                    <a href='#projects'>
                        <button  className='heroButton'>Projects</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Hero
