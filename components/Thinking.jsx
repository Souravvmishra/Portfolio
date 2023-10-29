'use client'
import React from 'react'
import { FaReact } from 'react-icons/fa6'
import { FcFlashOn, FcSupport } from 'react-icons/fc'
import { motion } from 'framer-motion'


const thoughts = [
    {
        icon: <FcFlashOn size={30} />,
        title: 'Listen audio of top creators',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis alias reiciendis placeat.',
        color: 'orange'
    },
    {
        icon: <FaReact size={30} />,
        title: 'Create your own content',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis alias reiciendis placeat.',
        color: 'sky'
    },
    {
        icon: <FcSupport size={30} />,
        title: 'Everything is individual-made',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis alias reiciendis placeat.',
        color: 'purple'
    }
]


const Thinking = () => {
    const variants = {
        initial: {
            y: 50,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 25,
                staggerChildren: 0.3,
            },

        },
    };

    const scaleUp = {
        initial: {
            scale: 0
        },
        animate: {
            scale: 1,
            transition: {
                duration: 0.2,
            },
        }
    }

    return (
        <div className="my-12">
            <motion.div
                variants={variants}
                initial="initial"
                whileInView="animate"
                // viewport={{ once: true }}
                className="flex justify-between items-center"
            >
                {thoughts.map((item, i) => (
                    <motion.div
                        variants={variants}
                        key={i}
                        className="w-1/4 h-96 flex flex-col justify-evenly items-start"
                    >
                        <motion.div
                            variants={scaleUp}
                            className={`p-4  text-white rounded-full border-8 
                                ${item.color === "orange" && "bg-orange-900 border-orange-100"}
                                ${item.color === "purple" && "bg-purple-900 border-purple-100"}
                                ${item.color === "sky" && "bg-sky-900 border-sky-100"}`}
                        >
                            {item.icon}
                        </motion.div>
                        <div className="text-3xl font-bold">{item.title}</div>
                        <div className="text-base text-slate-600">{item.desc}</div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};


export default Thinking
