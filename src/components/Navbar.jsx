import React from 'react'
import FollowingComp from './FollowingComp.jsx'

function Navbar() {
    return (
        <>

            <div className='w-[20%] h-[100%] flex flex-col  items-center gap-4 pt-8 bg-[#1E202C] text-white'>
                <div>
                    <h1 className='font-bold text-white text-lg'>LiveNex</h1>
                </div>

                <div className='mt-8 flex flex-col items-center gap-4'>
                    <div>Home</div>
                    <div>live</div>
                </div>

                <div className='border-t-2 border-white w-full my-8'>
                    <h1 className='m-8 font-bold'>Following</h1>
                    <div className=' mt-8 flex flex-col gap-8'>
                        <FollowingComp heading="Jonathan" subheading=""/>
                        <FollowingComp heading="Jonathan" subheading=""/>
                        <FollowingComp heading="Jonathan" subheading=""/>
                        <FollowingComp heading="Jonathan" subheading="" />
                    </div>
                </div>


            </div>
        </>

    )
}

export default Navbar