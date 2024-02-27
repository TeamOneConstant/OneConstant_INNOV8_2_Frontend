

function UserSideVid() {
    return (
        <>
            <div className="w-full h-[100vh] bg-slate-900 flex flex-col">
                <div className="flex  p-4 px-10 gap-6">
                    <div className="w-max flex items-center gap-2">
                        <img
                            src="https://cdn.pixabay.com/photo/2017/03/14/21/07/logo-2144403_640.png"
                            className="w-[50px] h-[50px] rounded-[50%]"
                        />
                        <h1 className="text-3xl font-bold text-white">LiveNex</h1>
                    </div>
                    <input
                        type="text"
                        placeholder="Search the liveStream"
                        className="p-1 px-6 rounded-[40px] bg-slate-800 w-[800px] ml-10"
                    />
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
                
                <div className="flex flex-row px-10 p-4 gap-5">
                    <div className="w-[100%]  flex flex-col h-[80vh]">
                            <video className="w-[100%] h-[80%]" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        <div className="flex flex-col gap-2 mt-2">
                            <h2 className="text-white text-sm">
                                Welcome to the most exhilarating cricket experience on YouTube!
                            </h2>
                            <h2 className="flex items-center gap-2">
                                <div className="w-[10px] h-[10px] bg-blue-700 rounded-[50%]"></div>
                                <h2 className="text-white">78k live watching</h2>
                            </h2>
                            <div className="flex justify-between mt-2">
                                <div className="w-max flex items-center gap-2">
                                    <img
                                        src="https://cdn.pixabay.com/photo/2017/03/14/21/07/logo-2144403_640.png"
                                        className="w-[40px] h-[40px] rounded-[50%]"
                                    />
                                    <div className="flex flex-col">
                                        <h1 className="text-[15px]  text-white">Jonathan Gaming</h1>
                                        <h1 className="text-[10px] text-white">2.3 M Followers</h1>
                                    </div>
                                </div>
                                <button className="bg-blue-700 text-white px-10 rounded-[40px]">
                                    Follow
                                </button>
                            </div>
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

export default UserSideVid;