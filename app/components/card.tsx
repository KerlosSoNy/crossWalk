import React from 'react'
import BrandSVG from './svg/Brand'
import SeoSVG from './svg/Seo'
import Image from 'next/image'

export default function Cards() {
    return (
        <div className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-3 lg:mt-20 mb-10 container mx-auto   ">
            <div
                className="transition-all  duration-1000 sbg-gradient-to-r via-[#1A232E]  from-[#A9485C] rounded-xl  hover:shadow-2xl hover:shadow-[#A9485C] m-2 p-4 relative z-40 group  ">
                {/* <div
            className=" absolute  bg-[#A9485C] top-0 left-0 w-24 h-1 z-30  transition-all duration-700   group-hover:bg-white group-hover:w-full  ">
        </div> */}
                <div className="py-2 px-9 relative text-center ">
                    <div className="flex items-center justify-center w-[120px] h-[60px] my-2 mx-auto">
                        <Image src="/social.svg" width={80} height={70} alt="seo" className='' />
                    </div>
                    <h3 className="mt-9 text-lg font-semibold text-white group-hover:text-white ">Grow Your Social Presence
                    </h3>
                    <p className="mt-4 text-base text-gray-200 group-hover:text-white  ">Create, optimize, and manage campaigns across all major platforms.</p>
                </div>
            </div>
            <div
                className="transition-all  duration-1000  sbg-gradient-to-t via-[#1A232E]  from-[#A9485C] rounded-xl  hover:shadow-2xl hover:shadow-[#A9485C] m-2 p-4 relative z-40 group  ">
                {/* <div
            className=" absolute  bg-[#A9485C] top-0 left-0 w-24 h-1 z-30  transition-all duration-700   group-hover:bg-white group-hover:w-full  ">
        </div> */}
                <div className="py-2 px-9 relative  text-center">
                    <div className="flex items-center justify-center w-[120px] h-[60px] mt-2 mx-auto">
                        <BrandSVG />
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-white group-hover:text-white ">
                        Make Your Brand Unforgettable</h3>
                    <p className="mt-4 text-base text-gray-200 group-hover:text-white">Specialized in logo design, packaging, and brand guidelines.</p>
                </div>
            </div>
            <div
                className="transition-all  duration-1000 sbg-gradient-to-l via-[#1A232E]  from-[#A9485C] rounded-xl  hover:shadow-2xl hover:shadow-[#A9485C] m-2 p-4 relative z-40 group  ">
                {/* <div
            className=" absolute  bg-[#A9485C] top-0 left-0 w-24 h-1 z-30  transition-all duration-700  group-hover:bg-white group-hover:w-full  ">
        </div> */}
                <div className="py-2 px-9 relative  text-center">
                    <div className="flex items-center justify-center w-[120px] h-[60px] mt-2 mx-auto">
                        <SeoSVG />
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-white group-hover:text-white ">Rank Higher, Convert Better</h3>
                    <p className="mt-4 text-base text-gray-200 group-hover:text-white">Drive traffic and boost conversions with data-driven ads.</p>
                </div>
            </div>


        </div>
    )
}
