import React from 'react'
import FollowingComp from './FollowingComp.jsx'
import Button from './Button.jsx'
import cor from "../assets/cor.png"
function SliderComp() {
    return (
        <div className='w-[551px] h-[335px] flex flex-col justify-end  m-4  ' style={{ backgroundImage: `url(${cor})`,
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Change 'background' to 'backgroundColor'
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'darken'}}>
            <div className='flex flex-col items-start gap-4 w-[70%] m-4'>
                <FollowingComp heading="Jonathan" subheading="2.4k watching" />
                <Button  text="watch"/>
            </div>
        </div>
    )
}

export default SliderComp