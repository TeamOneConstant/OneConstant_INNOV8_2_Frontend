import React from 'react'
import jonathan from "../assets/jonathan.png"

function FollowingComp({heading,subheading}) {
    return (
        <>
            <div className='flex flex-row gap-1 justify-center '>
                <img src={jonathan} alt="" className='w-[50px] h-[50px] rounded-full' />
                <div className='flex flex-col '>
                    <h1 className=' px-2 text-white text-md'>{heading}</h1>
                    <p className=' px-2 my-2 text-white text-[12px]'>{subheading}</p>
                </div>
            </div>
        </>
    )
}

export default FollowingComp