import React from 'react'
import Navbar from './Navbar.jsx'
import SliderComp from './SliderComp.jsx'
import Card from './Card.jsx'
function HomeContent() {
    return (
        <>
            <div className="flex flex-row w-[100%] h-[100vh] bg-slate-900 overflow-hidden" style={{
                overflowY: 'scroll',
                scrollbarWidth: 'none', // Standard property for non-WebKit browsers
                scrollbarColor: 'transparent transparent', // For Firefox scrollbar
                scrollbarTrackColor: 'transparent', // For Firefox scrollbar track
                WebkitOverflowScrolling: 'touch', // For smooth scrolling in iOS Safari
                '-ms-overflow-style': 'none', // For IE and Edge
                'scrollbar-width': 'none', // Webkit property for WebKit browsers
                '&::-webkit-scrollbar': {
                    display: 'none' // Hide scrollbar for WebKit browsers
                }
            }}>
                <Navbar />
                <div className='flex flex-col  overflow-y-auto  w-[100%]'>
                    <div className='flex flex-row gap-10 w-[100%] mx-4 my-4'>
                        <input
                            type="text"
                            placeholder="Search the liveStream"
                            className=" px-10 py-4 rounded-[40px] bg-slate-800 w-[800px] "
                        />
                        <div className="w-max flex items-center gap-2 ">
                            <img
                                src="https://cdn.pixabay.com/photo/2017/03/14/21/07/logo-2144403_640.png"
                                className="w-[40px] h-[40px] rounded-[50%]"
                            />
                            <h1 className="text-xl text-white">10.2k</h1>
                        </div>
                        <div className="w-max flex items-center gap-2 ">
                            <div className="w-[40px] h-[40px] rounded-[50%] bg-pink-700 text-white text-2xl flex items-center justify-center">
                                J
                            </div>
                        </div>
                        <button className='px-10 py-2 bg-blue-500 text-white font-bold rounded-md'>Go Live</button>
                    </div>

                    <div>
                        <SliderComp />
                    </div>
                    <div className='grid grid-cols-3 pt-10 '>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

            </div>


        </>
    )
}

export default HomeContent