"use client";
import React, {useRef, useEffect} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

export default function VideoGrid() {
    //Adding smooth scroll using Lenis Scroll
    useEffect(() => {
      const lenis = new Lenis()
      lenis.on('scroll', (e) => {
        console.log(e)
      })
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)}, []);
  

    const ref = useRef(null)

    // useScroll hook to track the scroll progress of the specified container (ref)
    const {scrollYProgress} = useScroll({
        target: ref
    })
    // Rotate the container based on scroll srogress
    const rotate = useTransform(scrollYProgress, [0,1], [0, 180])

    //Rotate the video in the container to the opposite side of container motion
    const inverseRotate = useTransform(scrollYProgress, [0,1], [0, -180])

    //Scale the div that contains the container based on scroll progress
    const containerScale = useTransform(scrollYProgress, [0,1], [0.8, 1.3])
  return (
    <div className='md:h-[500vh] h-[300vh] bg-[#191825]'>
        <div className='flex items-center justify-center sticky top-0 h-screen overflow-hidden'>
            <motion.div 
              className='grid grid-cols-5 grid-row-5 gap-4 p-2 items-center justify-center pointer-events-none'
              style={{rotate: rotate, scale:containerScale}}
            >

                {/* dog */}
                <motion.div className='w-full h-full col-span-2 row-span-2 rounded-2xl overflow-hidden'>
                    <motion.div 
                        className='w-full h-full'
                        style={{rotate:inverseRotate, scale: 2}}
                    >
                        <video autoPlay muted loop playsInline className='h-full w-full object-cover'>
                            <source src="/dog.mp4"  type='video/mp4'/>
                        </video>
                    </motion.div>
                </motion.div>

                {/* wolf */}
                <motion.div className='bg-red-400 w-full col-start-3 row-start-1 col-span-2 row-span-4 rounded-2xl overflow-hidden'>
                    <motion.div 
                        className='w-full h-full'
                        style={{rotate:inverseRotate, scale: 2}}
                    >
                        <video autoPlay muted loop playsInline className='h-full w-full object-cover'>
                            <source src="/wolf.mp4"  type='video/mp4'/>
                        </video> 
                    </motion.div>
                </motion.div>

                {/* Caterpillar */}
                <motion.div className='bg-red-400 w-full h-full row-start-1 col-start-5 col-span-1 row-span-2 rounded-2xl overflow-hidden'>
                    <motion.div 
                        className='w-full h-full'
                        style={{rotate:inverseRotate, scale:2}}
                    >
                        <video autoPlay muted loop className='h-full w-full object-cover'>
                            <source src="/caterpillar.mp4"  type='video/mp4'/>
                        </video> 
                    </motion.div>
                </motion.div>

                {/* Parrot */}
                <motion.div className='bg-red-400 w-full h-full col-start-2 row-start-3 rounded-xl overflow-hidden'>
                    <motion.div 
                      className='w-full h-full'
                      style={{rotate:inverseRotate, scale:2}}
                    >
                        <video autoPlay muted loop className='h-full w-full object-cover'>
                            <source src="/parrot.mp4"  type='video/mp4'/>
                        </video> 
                    </motion.div>
                </motion.div>

                {/* Jellyfish */}
                <motion.div className='bg-red-400 w-full h-full col-start-2 row-start-4 col-span-2 row-span-2 rounded-2xl overflow-hidden'>
                    <motion.div 
                      className='w-full h-full'
                      style={{rotate:inverseRotate, scale:2}}
                    >
                        <video autoPlay muted loop className='h-full w-full object-cover'>
                            <source src="/jellyfish.mp4"  type='video/mp4'/>
                        </video> 
                    </motion.div> 
                </motion.div>
                
                {/* Horses */}
                <motion.div className='bg-red-400 w-full h-full col-start-5 row-start-3 row-span-2 col-span-1 rounded-2xl overflow-hidden'>
                    <motion.div
                        className='w-full h-full' 
                        style={{rotate:inverseRotate, scale:3}}
                    >
                        <video autoPlay muted loop className='h-full w-full object-cover'>
                            <source src="/horses.mp4"  type='video/mp4'/>
                        </video> 
                    </motion.div>
                </motion.div>

                {/* Lions*/}
                <motion.div className='bg-red-400 w-full h-full row-start-4 col-start-4 col-span-1 row-span-3 rounded-2xl overflow-hidden'>
                <motion.div 
                    className='w-full h-full'
                    style={{rotate:inverseRotate, scale:2}}
                >
                    <video autoPlay muted loop className='h-full w-full object-cover'>
                        <source src="/lions.mp4"  type='video/mp4'/>
                    </video> 
                </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}
