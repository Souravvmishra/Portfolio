import React from 'react'

const Footer = () => {
    return (
        <div className='mt-24 bg-red-50 -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-32'>
            <div className='px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32 pt-8'>
                <div className='flex justify-between items-center'>
                    <div className='w-1/5'>
                        <div className='text-5xl font-bold'>Sourav</div>
                        <div className='text-5xl font-bold'>Mishra</div>
                        <div className='text-lg font-semibold pt-2'>Developer | Explorer | Creator</div>
                        <div className='text-lg font-semibold'> Lorem ipsum dolor sit amet.</div>
                    </div>
                    <div className='w-1/5 flex'>
                        <div className='px-5'>
                            <ul className='text-base font-semibold'>
                                <li className='px-4 cursor-pointer py-1 hover:bg-gray-200 rounded-xl duration-300'>Terms</li>
                                <li className='px-4 cursor-pointer py-1 hover:bg-gray-200 rounded-xl duration-300'>Privacy</li>
                                <li className='px-4 cursor-pointer py-1 hover:bg-gray-200 rounded-xl duration-300'>How</li>
                            </ul>

                        </div>
                        <div className='px-5'>
                            <ul className='text-base font-semibold'>
                                <li className='px-4 cursor-pointer py-1 hover:bg-gray-200 rounded-xl duration-300'>FAQs</li>
                                <li className='px-4 cursor-pointer py-1 hover:bg-gray-200 rounded-xl duration-300'>Careers</li>
                                <li className='px-4 cursor-pointer py-1 hover:bg-gray-200 rounded-xl duration-300'>Give Feedback</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center font-semibold text-base py-12'>
                    <p className='pt-8 text-sm'>© 2023 All rights reserved. </p>
                    <p className='pt-8 text-sm'>Made with ❤️ by <a className='underline pl-1' href='www.instagram.com/souravvmishra_'>Sourav Mishra</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
