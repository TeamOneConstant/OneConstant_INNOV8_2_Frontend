import React from 'react'
import jonathon from "../assets/jonathan.png"
function ChatDiv() {
    return (
        <div className='my-2 text-white text-[12px] '>
            <div className='flex flex-row justify-between '>
                <div className='flex flex-row'>
                    <img src={jonathon} alt="" className='w-[30px] h-[30px] rounded-full' />
                    <h1 className='my-auto px-2'>
                        Jay Rajput
                    </h1>
                </div>

                <h1>
                    2:30pm
                </h1>
            </div>

            <div className='text-[12px] my-2'>
                Wow, this chat is buzzing with energy! 🚀 Let's keep the conversation flowing and explore new horizons together!
            </div>
        </div>
    )
}

export default ChatDiv