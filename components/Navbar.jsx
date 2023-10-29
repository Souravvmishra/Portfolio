import Image from 'next/image'
import React from 'react'

const socials = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/souravvmishra_',
        icon: 'https://www.svgrepo.com/show/521711/instagram.svg'
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/souravvmishra',
        icon: 'https://www.svgrepo.com/show/512419/linkedin-161.svg'
    },
    {
        name: 'Github',
        link: 'https://www.github.com/souravvmishra',
        icon: 'https://www.svgrepo.com/show/512317/github-142.svg'
    }
]

const Navbar = () => {
    return (
        <div className=''>
            <div className='flex justify-between items-center py-6'>
                <div>
                    <div className='text-3xl font-black font-sans'>Sourav Mishra</div>
                </div>
                
                <div className='flex '>
                    {
                        socials.map((social, i) => (
                            <a key={i} target='_blank' href={social.link} className='px-2 hover:drop-shadow-lg'>
                                <Image src={social.icon} alt={` Sourav's ${social.name}`} width={25} height={25} />
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
