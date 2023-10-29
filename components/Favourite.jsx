'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { slideUp } from '@/animations/animations'

const tags = ['lorem', 'lorehbm', 'lorem', 'lorem', 'lorem', 'lorem',]
const bgColor = [
    'bg-red-100',
    'bg-blue-100',
    'bg-green-100',
    'bg-yellow-100',
    'bg-indigo-100',
    'bg-pink-100',
];
const textColor = [
    'text-red-900',
    'text-blue-900',
    'text-green-900',
    'text-yellow-900',
    'text-indigo-900',
    'text-pink-900',
];

const cardData = [
    {
        title: 'Lorem Ipsum',
        desc: 'hello World',
    },
    {
        title: 'Lorem Ipsum',
        desc: 'hello World',
    },
    {
        title: 'Lorem Ipsum',
        desc: 'hello World',
    },
    {
        title: 'Lorem Ipsum',
        desc: 'hello World',
    }
]

const TagComponent = ({ tag, i }) => (
    <motion.div variants={slideUp} className={`${bgColor[i]} ${textColor[i]} px-4 py-1 rounded-3xl mx-2`}>
        #{tag}
    </motion.div>
)

const Card = ({ card }) => (
    <motion.div
        variants={slideUp}
        className='px-6 py-3 rounded-2xl shadow max-w-xs flex justify-evenly items-center my-5 flex-grow'>
        <motion.div variants={slideUp} className='flex justify-start flex-col'>
            <p className='text-2xl w-full mx-auto font-semibold'>{card.title}</p>
            <p className='text-sm text-gray-600 w-full mx-auto '>{card.desc}</p>
        </motion.div>
        <motion.div variants={slideUp} className='px-3 py-1 text-2xl text-white bg-orange-600 rounded-xl aspect-square cursor-pointer active:scale-95 duration-300 hover:scale-105'>
            🞂
        </motion.div>
    </motion.div>
)


const RippleEffect = () => {

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        container: containerRef.current,
    });

    const scale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0])

    return (
        <motion.div
            ref={containerRef}
            style={{ scale }}
            id='parentForAnim' className='origin-center'>
            <motion.div
                variants={slideUp}
                initial={'initial'}
                whileInView={'animate'}
            >
                <div className='w-1/2 mx-auto'>
                    <motion.h3
                        variants={slideUp}
                        className='text-6xl font-bold mx-auto'>Choose your
                        <span className='pl-4 text-blue-600 '>favourite content</span> genere
                    </motion.h3>
                </div>
                <div className=' py-12'>
                    <motion.div variants={slideUp} className='flex w-1/2 text-2xl font-semibold items-center justify-evenly mx-auto'>
                        {
                            tags.map((tag, i) => (
                                <TagComponent tag={tag} key={i} i={i} />
                            ))
                        }
                    </motion.div>
                    <div className='py-12 flex justify-center space-x-16 items-start'>
                        <motion.div variants={slideUp} className='w-80'>
                            {
                                cardData.map((card, i) => (
                                    <Card key={i} card={card} />
                                ))
                            }
                        </motion.div>
                        <motion.div
                            variants={slideUp}
                            className='rounded-3xl w-fit overflow-hidden '>
                            <Image src={'/image.jpg'} alt='image' width={300} height={300} />
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    )
}

export default RippleEffect
