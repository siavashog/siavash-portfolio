'use client'

import Image from 'next/image'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Instagram from "./components/Instagram";
import {SliderData} from "./components/SliderData";

export default function Home() {
  return (
    <>
      <Navbar/>
    <div>
      <Hero heading='Siavash Photography' message='I capture moments in nature and keep them alive.' />
      <Slider slides={SliderData} />
      <Instagram />

    </div>
    </>
  )
}
