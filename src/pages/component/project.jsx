import React from 'react'
import { Parallax } from 'react-parallax'

export default function Project() {
    return (
        <Parallax strength={300}>
            <div id="project" className='w-full h-full bg-[#181920]  flex justify-center flex-col items-start py-32 pb-36 px-20 gap-y-10'>
                {/* title */}
                <div className="w-[10%]">
                    <h1 className="font-bold text-white text-5xl">
                        My <br /> Project
                    </h1>
                    <div className="relative">
                        <div className="p-2 top-0 left-[166px] rounded-full bg-[#FFD700] absolute"></div>
                        <div className="pt-2 border-b   border-[#FFD700]"></div>
                    </div>
                </div>
                {/* title */}
                {/* Content */}
                <div className=""></div>
                {/* Content */}
            </div>
        </Parallax>
    )
}
