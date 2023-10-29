'use client'

import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';
import { slideUp } from '@/animations/animations';


const reviews = [
    {
        name: "John Doe",
        review: "Amazing product! I've never seen anything like it. It's changed my life.",
        image: "/image.jpg"
    },
    {
        name: "Jane Smith",
        review: "The customer service is top-notch, and the product quality is exceptional. Highly recommended!",
        image: "/image.jpg"
    },
    {
        name: "Michael Johnson",
        review: "I can't believe I didn't discover this product sooner. It's a game-changer!",
        image: "/image.jpg"
    },
    {
        name: "Sarah Wilson",
        review: "This product exceeded my expectations. I'm a happy customer!",
        image: "/image.jpg"
    },
    {
        name: "David Lee",
        review: "Great value for the price. I use it every day, and it never disappoints.",
        image: "/image.jpg"
    },
    {
        name: "Emily Brown",
        review: "I love the design and functionality of this product. It's a must-have for anyone.",
        image: "/image.jpg"
    }
];

const Card = ({ review }) => (
    <motion.div variants={slideUp} className="px-3 md:w-1/3 inline-block hover:scale-105 duration-300 cursor-pointer ">
        <div className=" mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 shadow-lg">
            <div className="w-full flex mb-4 items-center">
                <motion.div variants={slideUp} className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <Image width={50} height={50} src={review.image} alt="review" />
                </motion.div>
                <motion.div variants={slideUp} className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">{review.name}</h6>
                </motion.div>
            </div>
            <motion.div variants={slideUp} className="w-full">
                <p className="text-base font-medium leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    {review.review}
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                </p>
            </motion.div>
        </div>
    </motion.div>

)

const Testimonial = () => {
    return (
        <div>
            <div>
                <div className='w-1/2 py-12'>
                    <motion.h3
                        variants={slideUp}
                        initial='initial'
                        whileInView={'animate'}
                        className='text-5xl font-bold mx-auto'>What My Clients Say 🗣️
                    </motion.h3>
                </div>
                <motion.div
                    variants={slideUp}
                    initial='initial'
                    whileInView={'animate'}
                >
                    {
                        reviews.map((review, i) => (
                            <Card key={i} review={review} />
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Testimonial
