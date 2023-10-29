'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { slideUp } from '@/animations/animations'

const TheBestPlatform = () => {
    const leftSlide = {
        initial: {
            x: -100,
            y: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 50,
                staggerChildren: 0.3,
            },

        },
    }

    const topSlide = {
        initial: {
            x: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 50,
                staggerChildren: 0.3,
            },

        },
    }

    const rightSlide = {
        initial: {
            x: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 50,
                staggerChildren: 0.3,
            },

        },
    }
    return (
        <div className='py-12'>
            <div>
                <motion.div
                    variants={slideUp}
                    initial={'initial'}
                    whileInView={'animate'}
                    className='w-1/2 mx-auto'>
                    <motion.h3
                        variants={slideUp}
                        className='text-6xl font-bold mx-auto'>The Best Platform</motion.h3>
                    <motion.p
                        variants={slideUp}
                        className='mx-auto py-4 text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt accusamus blanditiis dicta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque fugit vero odit cum.</motion.p>
                </motion.div>


                <div className='py-12'>
                    <motion.div
                        className='flex space-x-4 h-64'>
                        <motion.div
                            variants={leftSlide}
                            initial={'initial'}
                            whileInView={'animate'}
                            className='w-2/5 bg-purple-100 text-purple-800 aspect-video rounded-xl p-8'>
                            <motion.p variants={leftSlide} className='text-lg font-semibold'>Adaption for any devices</motion.p>
                            <motion.p variants={leftSlide} className='text-4xl font-sans font-bold py-4'>View all profucts with your browser</motion.p>
                        </motion.div>
                        <motion.div
                            variants={topSlide}
                            initial={'initial'}
                            whileInView={'animate'}
                            className='w-3/5 bg-red-100 text-red-800 aspect-video rounded-xl p-8 relative'>
                            <motion.p variants={topSlide} className='text-lg font-semibold'>Stories</motion.p>
                            <motion.p variants={topSlide} className='text-4xl font-sans font-bold py-4 w-2/3'>Lorem ipsum dolor sit amet consectetur.</motion.p>
                            <Image
                                alt='womenDrawing'
                                height={160}
                                width={160}
                                src={'/predectiveMan.svg'}
                                className='absolute bottom-0 right-0 opacity-80 blur-[0.1px] '
                            />
                        </motion.div>
                    </motion.div>
                    <div className='flex space-x-4 h-64 my-4'>
                        <motion.div
                            variants={slideUp}
                            initial={'initial'}
                            whileInView={'animate'}
                            className='w-3/5 bg-emerald-100 text-embg-emerald-800 aspect-video rounded-xl p-8 relative'>
                            <motion.p variants={slideUp} className='text-lg font-semibold'>Categories</motion.p>
                            <motion.p variants={slideUp} className='text-4xl font-sans font-bold py-4 w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </motion.p>
                            <Image
                                alt='womenDrawing'
                                height={250}
                                width={250}
                                src={'/womenDrawing.svg'}
                                className='absolute bottom-2 right-2 opacity-80 blur-[0.1px] '
                            />
                        </motion.div>
                        <motion.div
                            variants={rightSlide}
                            initial={'initial'}
                            whileInView={'animate'}
                            className='w-2/5 bg-amber-100 text-amber-800 aspect-video rounded-xl p-8'>
                            <motion.p
                                variants={leftSlide}
                                className='text-lg font-semibold'>Features</motion.p>
                            <motion.p
                                variants={rightSlide}
                                className='text-4xl font-sans font-bold py-4'>Lorem ipsum dolor sit amet consectetur adipisicing.</motion.p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheBestPlatform
