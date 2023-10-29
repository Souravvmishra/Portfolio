'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { slideUp } from '@/animations/animations'

const list = [
    {
        image: '/image.jpg'
    },
    {
        image: '/image.jpg'
    },
    {
        image: '/image.jpg'
    },
    {
        image: '/image.jpg'
    },
    {
        image: '/image.jpg'
    },
    {
        image: '/image.jpg'
    },
    {
        image: '/image.jpg'
    },
    {
        image: '/image.jpg'
    },
]


const Sliding = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        container: containerRef.current,
    });

    const x = useTransform(scrollYProgress, [0.1, 1], ['100%', '-800%'])
    const x2 = useTransform(scrollYProgress, [0.1, 1], ['-500%', '200%'])

    return (
        <div className='my-12 overflow-hidden -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-32 py-12'>
            <motion.div
                ref={containerRef}
                variants={slideUp}
                initial={'initial'}
                whileInView={'animate'}
            >
                <div className='text-5xl  font-bold w-1/3 mx-auto mb-20'>
                    <motion.h3 className='drop-shadow-xl' >Over 5000+ products available
                        <span className='pl-4 text-blue-600'>to check</span>
                    </motion.h3>
                </div>


                <motion.div
                    className='rotate-1 w-fit flex my-3 origin-left '>
                    {
                        list.map((item, i) => (
                            <motion.div
                                style={{ x }} 
                                key={i} 
                                className='h-44 overflow-hidden aspect-video object-contain m-3 inline-block shadow-lg shadow-black/50 rounded-lg'>
                                <Image
                                    src={item.image}
                                    alt='fhbejhf'
                                    width={320}
                                    height={320}
                                    className='rounded-lg object-cover aspect-video object-center'
                                />
                            </motion.div>
                        ))
                    }
                </motion.div>



                <motion.div
                    className='rotate-1 w-fit flex my-3 origin-left'>
                    {
                        list.map((item, i) => (
                            <motion.div
                                style={{ x: x2 }}
                                key={i}
                                className='h-44 overflow-hidden aspect-video object-contain m-3 inline-block  shadow-lg shadow-black/50 rounded-lg '>
                                <Image
                                    src={item.image}
                                    alt='fhbejhf'
                                    width={320}
                                    height={320}
                                    className='rounded-lg object-cover aspect-video object-center'
                                />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Sliding
