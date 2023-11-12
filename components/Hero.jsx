'use client'

import React, { useEffect, useState } from 'react'
import GetStartedBtn from './buttons/GetStartedBtn'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MdDeveloperMode } from 'react-icons/md'
import { TbBrandFramerMotion } from 'react-icons/tb'
import Navbar from './Navbar'

const list = [
    {
        image: '/souravMishra02.jpg'
    },
    {
        image: '/souravMishra01.jpg'
    },
    {
        image: '/souravMishra02.jpg'
    },
    {
        image: '/souravMishra01.jpg'
    },
]

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        container: containerRef.current
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, -900])
    const y2 = useTransform(scrollYProgress, [0, 1], [-500, 500])


    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(false)
    }, [])

    if (load) {
        return (
            <div className='h-screen  flex items-center justify-center'>
                <div className="loader"></div>
            </div>
        )
    }

    return (
        <div ref={containerRef} className='h-screen'>
            <Navbar />
            <div className='w-full flex pt-32 md:pt-0 justify-between items-center '>

                <div className='md:w-2/5 w-full bg-[url(/gifs/heroTextBg.gif)] bg-clip-text text-transparent'>
                    <motion.div
                        initial={{
                            y: 25,
                            opacity: 0

                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: .3,
                            type: 'spring',
                            stiffness: 25
                        }}
                        className='text-7xl lg:text-8xl font-extrabold overflow-hidden'>
                        Sourav
                    </motion.div>
                    <motion.div
                        initial={{
                            y: 50,
                            opacity: 0

                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: .3,
                            type: 'spring',
                            stiffness: 25,
                            delay: 0.1
                        }}
                        className='text-7xl lg:text-8xl font-extrabold'>
                        Mishra
                    </motion.div>
                    <motion.div
                        initial={{
                            y: 75,
                            opacity: 0

                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: .3,
                            type: 'spring',
                            stiffness: 25,
                            delay: 0.2
                        }}
                        className=' text-base lg:text-xl font-sans py-6 text-slate-800 font-semibold'>
                        Hi 👋, I’m <span className='underline decoration-emerald-500 font-semibold decoration-dotted decoration-2'>Sourav Mishra</span>, a web and web app developer who loves to create. I build responsive, user-friendly, and accessible websites and web applications that solve real-world problems. I’m always eager to learn new things and challenge myself.
                    </motion.div>
                    <motion.div
                        initial={{
                            scaleY: 0,
                            opacity: 0
                        }}
                        whileInView={{
                            scaleY: 1,
                            opacity: 1
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: .3,
                            type: 'spring',
                            stiffness: 25,
                            delay: 0.3
                        }}
                        className='w-1/2'
                    >
                        <a href='mailto:souravvmishra@hmail.com'>
                            <GetStartedBtn text={"Let's Work Together"} />
                        </a>
                    </motion.div>
                </div>
                <div className='hidden md:block relative  w-[50%] aspect-square overflow-hidden  blurshadow '>
                    <div className='absolute inset-0 -rotate-12 -z-10 flex space-x-6'>
                        <motion.div
                            initial={{
                                y: -500
                            }}
                            whileInView={{
                                y: -50
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: .3,
                                type: 'spring',
                                stiffness: 25
                            }}
                            style={{ y }}
                            className='-translate-y-44'>
                            {
                                list.map((item, i) => (
                                    <div key={i} className=''>
                                        <Image
                                            src={item.image}
                                            alt='fhbejhf'
                                            width={250}
                                            height={250}
                                            className='rounded-lg object-contain object-center m-6 '
                                        />
                                    </div>
                                ))
                            }
                        </motion.div>
                        <motion.div
                            initial={{
                                y: 500
                            }}
                            whileInView={{
                                y: -500
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: .3,
                                type: 'spring',
                                stiffness: 25
                            }}
                            style={{ y: y2 }}
                            className='-translate-y-24'>
                            {
                                list.map((item, i) => (
                                    <div key={i} className=''>
                                        <Image
                                            src={item.image}
                                            alt='fhbejhf'
                                            width={250}
                                            height={250}
                                            className='rounded-lg object-contain object-center m-6 '
                                        />
                                    </div>
                                ))
                            }
                        </motion.div>
                        <motion.div
                            initial={{
                                y: -500
                            }}
                            whileInView={{
                                y: -50
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: .3,
                                type: 'spring',
                                stiffness: 25
                            }}
                            style={{ y }}
                        >
                            {
                                list.map((item, i) => (
                                    <div key={i} className=''>
                                        <Image
                                            src={item.image}
                                            alt='fhbejhf'
                                            width={250}
                                            height={250}
                                            className='rounded-lg object-contain object-center m-6 '
                                        />
                                    </div>
                                ))
                            }
                        </motion.div>
                    </div>
                    <div className='absolute flex bottom-12 w-full justify-evenly text-xl'>
                        <motion.div
                            initial={{
                                y: 25,
                                opacity: 0

                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: .3,
                                type: 'spring',
                                stiffness: 25,
                                delay: 0.2
                            }}
                            className='font-bold flex justify-center items-center'>
                            <span className='mx-4 bg-red-100 flex-grow p-2 text-red-800 rounded-xl'>
                                <MdDeveloperMode size={25} />
                            </span>
                            <span>
                                <p>Full Stack Developer</p>
                                <p className='text-sm text-gray-800'>10+ projects</p>
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{
                                y: 25,
                                opacity: 0

                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: .3,
                                type: 'spring',
                                stiffness: 25,
                                delay: 0.3
                            }}
                            className='font-bold flex justify-center items-center'>
                            <span className='mx-4 bg-purple-100 flex-grow p-2 text-purple-800 rounded-xl'>
                                <TbBrandFramerMotion size={25} />
                            </span>
                            <span>
                                <p>Animations</p>
                                <p className='text-sm text-gray-800'>Like Magic</p>
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
