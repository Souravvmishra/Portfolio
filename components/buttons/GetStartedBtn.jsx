import React from 'react'

const GetStartedBtn = ({ text }) => {
    return (
        <div className='cursor-pointer'>
            <span className="px-4 lg:px-6 py-2 lg:py-3 relative rounded-xl group text-white font-medium inline-block mx-2 w-full text-center">
                <span className="absolute top-0 left-0 w-full h-full rounded-xl opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-xl opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-xl shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-xl bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative font-black text-xl whitespace-nowrap">{text}</span>
            </span>
        </div>
    )
}

export default GetStartedBtn
