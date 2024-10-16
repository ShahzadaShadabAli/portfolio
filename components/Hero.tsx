import React from 'react'
import { Spotlight } from './ui/Spotligt'
import { TextGenerateEffect } from './ui/TextGenerate'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 relative h-screen'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full md:-left-32 md:-top-20 h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 md:-left-32 md:-top-20 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div className="h-screen bg-black-100 w-full bg-grid-white/[0.1] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
     
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] max:md-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-50'>Dynamic Web Magic with Next.js</h2>

                <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl ' words="Transforming Concepts into Seamless User Experiences" />

                <p className="text-center text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4">
                    Hi, I&apos;m Shadab,
                    a Next.js Developer Based in Pakistan.
                </p>

                <a href="#about">
                  <MagicButton
                   title="Show my work"
                   icon={<FaLocationArrow />}
                   position={"right"}
                    /> 
                </a>

            </div>
        </div>

    </div>

    </div>
  )
}

export default Hero
