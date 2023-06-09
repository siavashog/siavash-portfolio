'use client';



import Image from 'next/image'
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import WorkExperience from "@/app/components/WorkExperience";

import './globals.css'
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import ContactMe from "@/app/components/ContactMe";
import axios from "axios";
import {useState,useEffect} from "react";


export default function Home() {
    // const [portfolioInfo,setPortfolioInfo] = useState();
  //   useEffect(() => {
  //
  //   axios.get(`/api/portfolio`).then(res => {
  //     setPortfolioInfo(res.data)
  //     console.log(portfolioInfo)
  //   })
  // },[])
    return (

            <div className='bg-gray1 text-white h-screen snap-y snap-mandatory
            overflow-y-scroll overflow-x-hidden z-0
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
            '>

                <Header/>

                <section id='hero' className='snap-start'>
                    <Hero/>
                </section>


                <section id='about' className='snap-center'>
                    <About/>
                </section>


                {/*<section id='experience' className='snap-start'>*/}
                {/*    <WorkExperience/>*/}
                {/*</section>*/}

                <section id='skills' className='snap-start'>
                    <Skills/>
                </section>

                <section id='projects' className='snap-start'>
                    <Projects/>
                </section>
                <section id='contact' className='snap-start'>
                    <ContactMe/>
                </section>

                <a href={"#hero"}>
                    <footer className='sticky bottom-5 w-full cursor-pointer'>
                        <div className='flex items-center justify-center '>
                            <img
                            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                            src="https://res.cloudinary.com/dduqbb1yc/image/upload/v1685049114/toTheTop_jpp3tj.png" alt=""/></div>
                    </footer>
                </a>




            </div>

    )
}
