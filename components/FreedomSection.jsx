'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import GetStartedBtn from './buttons/GetStartedBtn'
import { TbBrandFramerMotion } from 'react-icons/tb'


const FreedomSection = () => {

    const scaleUp = {
        initial: {
            scale: 0.2,
            opacity: 0.2,
            y: 50,
        },
        animate: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 50,
                staggerChildren: 0.3,
            },
        }
    }

    const variants = {
        initial: {
            y: 25,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 25,
                staggerChildren: 0.2,
            },

        },
    };


    return (
        <div className=''>
            <div className='py-24 flex items-start justify-between relative'>

                <div className='w-full h-[65%] bg-gradient-to-r from-transparent to-purple-100 absolute -z-10 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-32 top-12' />

                <motion.div
                    variants={scaleUp}
                    initial={'initial'}
                    whileInView={'animate'}
                    className='w-1/3 object-contain rounded-3xl  relative'>
                    <motion.div
                        variants={scaleUp}
                    >
                        <Image
                            src={'/image.jpg'}
                            alt='image'
                            width={5000}
                            height={5000}
                            className='rounded-3xl shadow-2xl' />
                    </motion.div>
                    <motion.div variants={scaleUp} className='absolute top-4 -right-14 z-10 text-black origin-center'>
                        <Image src={'/musicBot.svg'} alt='music bot' width={100} height={100} />
                    </motion.div>
                    <motion.div variants={scaleUp} className='absolute bottom-24 -right-14 z-10 text-black origin-center'>
                        <Image src={'/starsSvg.svg'} alt='music bot' width={150} height={150} />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={variants}
                    initial='initial'
                    whileInView='animate'
                    className='w-1/2 h-full '>
                    <motion.p
                        variants={variants}
                        className='text-7xl font-bold py-4'>
                        Freedom for your creative ideas.
                    </motion.p>
                    <motion.p
                        variants={variants}
                        className='text-xl text-gray-500 py-4'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur iure nemo quibusdam unde. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis rerum numquam nulla labore?
                    </motion.p>
                    <motion.div
                        variants={variants}
                        className='w-1/2 flex justify-between py-14'>
                        <motion.span variants={variants}>
                            <GetStartedBtn text={"Get Started"} />
                        </motion.span>
                        <motion.span variants={variants}>
                            <GetStartedBtn text={"Get Started"} />
                        </motion.span>
                    </motion.div>

                    <motion.div
                        variants={variants}
                        className='flex justify-between items-center py-6'>
                        <motion.div
                            variants={variants}
                            className='font-bold flex justify-center items-center'>
                            <span className='mx-4 bg-purple-100 p-2 text-purple-800 rounded-xl'>
                                <TbBrandFramerMotion size={25} />
                            </span>
                            <span>
                                <p>Animations</p>
                                <p className='text-sm text-gray-800'>Like Magic</p>
                            </span>
                        </motion.div>

                        <motion.div
                            variants={variants}
                            className='font-bold flex justify-center items-center'>
                            <span className='mx-4 bg-purple-100 p-2 text-purple-800 rounded-xl'>
                                <TbBrandFramerMotion size={25} />
                            </span>
                            <span>
                                <p>Animations</p>
                                <p className='text-sm text-gray-800'>Like Magic</p>
                            </span>
                        </motion.div>

                        <motion.div
                            variants={variants}
                            className='font-bold flex justify-center items-center'>
                            <span className='mx-4 bg-purple-100 p-2 text-purple-800 rounded-xl'>
                                <TbBrandFramerMotion size={25} />
                            </span>
                            <span>
                                <p>Animations</p>
                                <p className='text-sm text-gray-800'>Like Magic</p>
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>
        </div>

    )
}

export default FreedomSection
