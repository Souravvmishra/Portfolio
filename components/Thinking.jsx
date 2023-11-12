'use client'
import React from 'react'
import { FaReact } from 'react-icons/fa6'
import { FcFlashOn, FcSupport } from 'react-icons/fc'
import { motion } from 'framer-motion'


const thoughts = [
    {
        icon: <FcFlashOn size={30} />,
        title: 'Quality',
        desc: 'I take pride in delivering top notch work that aligns with your expectations and requirements. I pay attention to detail. Adhere to industry best practices and standards in web development. Rigorous testing and debugging ensure that my code performs flawlessly.',
        color: 'orange'
    },
    {
        icon: <FaReact size={30} color='white' />,
        title: 'Creativity',
        desc: 'A creative mindset fuels my passion for crafting. I possess the ability to design and develop websites and web applications that not function effectively but captivate users with their visual appeal. Furthermore I can employ my imagination and innovative thinking to produce content, such as poems, stories, code, essays, songs, celebrity parodies using my words and expertise.',
        color: 'sky'
    },
    {
        icon: <FcSupport size={30} />,
        title: 'Communication',
        desc: 'Effective and efficient communication is a cornerstone of my approach when collaborating with clients and fellow professionals. I actively listen to your needs and feedback while keeping you informed, about project progress and status. Your opinions are valued your suggestions taken seriously as we work together towards achieving the outcome.',
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
                duration: 0.1,
                type: "spring",
                stiffness: 25,
                staggerChildren: 0.5,
            },

        },
    };

    const scaleUp = {
        initial: {
            scale: 0
        },
        animate: {
            scale: 1,
            duration : 0.3,
            transition: {
                duration: 0.2,
            },
            
        }
    }

    return (
        <div className="my-24">
            <motion.div
                variants={variants}
                initial="initial"
                whileInView="animate"
                // viewport={{ once: true }}
                className="flex justify-between items-start flex-wrap"
            >
                {thoughts.map((item, i) => (
                    <motion.div
                        variants={variants}
                        key={i}
                        className="w-full md:w-1/4 h-fit flex flex-col justify-evenly items-center py-6 gap-4 border-2 cursor-pointer hover:shadow-lg duration-300 p-8 rounded-lg"
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
                        <div className="text-base text-slate-800 font-medium ">{item.desc}</div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};


export default Thinking
