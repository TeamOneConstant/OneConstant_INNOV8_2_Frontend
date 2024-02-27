import React from 'react'

import Mic from "../assets/Mic.png"
import Camera from "../assets/Camera.png"
import share from "../assets/share.png"

function StreamerSide() {
    return (
        <>
            <div className="w-full h-[100vh] bg-slate-900 flex flex-col">
                <div className="flex justify-between  p-4 px-10 gap-6">
                    <div className="w-max flex items-center gap-2">
                        <img
                            src="https://cdn.pixabay.com/photo/2017/03/14/21/07/logo-2144403_640.png"
                            className="w-[50px] h-[50px] rounded-[50%]"
                        />
                        <h1 className="text-3xl font-bold text-white">LiveNex</h1>
                    </div>

                    <div className='flex flex-row gap-8'>
                        <div className="w-max flex items-center gap-2 ml-10">
                            <img
                                src="https://cdn.pixabay.com/photo/2017/03/14/21/07/logo-2144403_640.png"
                                className="w-[50px] h-[50px] rounded-[50%]"
                            />
                            <h1 className="text-xl text-white">10.2k</h1>
                        </div>
                        <div className="w-max flex items-center gap-2">
                            <div className="w-[50px] h-[50px] rounded-[50%] bg-pink-700 text-white text-2xl flex items-center justify-center">
                                J
                            </div>
                            <h1 className="text-xl text-white">10.2k</h1>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row px-10 p-4 gap-5">
                    <div className="w-[100%]  flex flex-col h-[80vh]">
                        <video className="w-[100%] h-[80%]" controls>
                            <source src="movie.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className='flex flex-row justify-center w-full my-4'>
                            <div className='flex flex-row gap-2 '>
                                <img src={Mic} alt="" />
                                <img src={Camera} alt="" />
                                <img src={share} alt="" />
                            </div>

                            <div className="flex w-full justify-end">
                                <button className='px-6 py-2 bg-blue-500 text-white font-bold rounded-l-md'>Live</button>
                                 <button className='px-6 py-2  text-white font-bold border-[1px] border-white  rounded-r-md'>300k</button>
                            </div>

                        </div>

                        <div className='flex flex-row justify-center rounded-md my-4'>
                            <button className='px-10 py-2 bg-blue-500 text-white font-bold rounded-md'>Stream</button>
                        </div>
                    </div>

                    <div className="w-[30%] rounded-md bg-slate-700 flex flex-col h-[80vh]">
                        <div className="p-2 px-4 text-white">
                            <h1>Live Chat</h1>
                        </div>
                        <hr className="border border-gray-400" />

                        <div className="flex flex-col p-4">
                            <div className="flex flex-col">
                                <div className="w-[100%] flex justify-between items-center gap-2">
                                    <div className="w-max flex items-center gap-2">
                                        <div className="w-[30px] h-[30px] rounded-[50%] bg-pink-700 text-white text-lg flex items-center justify-center">
                                            J
                                        </div>
                                        <h1 className="text-lg  text-white">Jay Rajput</h1>
                                    </div>
                                    <h1 className="text-white">4:20AM</h1>
                                </div>
                                <div>
                                    <p className="text-white text-sm">
                                        Wow, this chat is buzzing with energy!🚀 Let's keep the
                                        conversation flowing and explore new horizons together!
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default StreamerSide;