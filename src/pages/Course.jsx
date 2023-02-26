import React, { useState } from 'react'
import CourceContent from '../components/CourceContent';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

const Course = () => {

    const [courseContentShowToggle,setCourseContentShowToggle] = useState(false);

    const src =
        "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

    return (
        <div className="flex flex-col p-2 md:p-10">
            <div className="flex flex-col md:flex-row ">
                <div className='md:w-[60%]'>
                    <video controls width="100%" className="rounded-xl h-72 md:h-auto bg-black">
                        <source src={src} type="video/webm" />
                        <source src={src} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>
                
                <div className="flex flex-row mt-5 items-center md:hidden ">
                    <h1 className="text-lg font-medium mr-2">Show course content</h1>
                    {
                        courseContentShowToggle ? 
                        <AiOutlineMinusCircle onClick={()=>setCourseContentShowToggle(!courseContentShowToggle)}/> :
                        <AiOutlinePlusCircle onClick={()=>setCourseContentShowToggle(!courseContentShowToggle)} />
                    }
                </div>

                <div className={`flex flex-col  rounded-2xl py-3 md:py-5 px-2 md:px-3 mt-5 md:mt-0 ${courseContentShowToggle ? 'h-60' : 'h-0 py-0'} md:h-[30rem] overflow-y-auto overflow-x-hidden md:ml-auto`}>
                    <div className="grid grid-cols-1 gap-y-5">
                        <CourceContent/>
                        <CourceContent/>
                        <CourceContent/>
                        <CourceContent/>
                        <CourceContent/>
                        <CourceContent/>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col md:mt-10 ${courseContentShowToggle ? 'mt-5' : 'mt-0'} md:w-1/2`}>
                <h1 className="text-3xl font-bold">Course details</h1>
                <h1 className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eaque in amet repudiandae magni voluptatem rerum beatae a, autem reprehenderit vitae voluptates exercitationem odit sequi qui unde necessitatibus quo repellendus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eaque in amet repudiandae magni voluptatem rerum beatae a, autem reprehenderit vitae voluptates exercitationem odit sequi qui unde necessitatibus quo repellendus.</h1>
            </div>
        </div>
    )
}

export default Course