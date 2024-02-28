import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomeContent, Navbar, SliderComp, Card } from "./components"
import StreamerSide from "./components/StreamerSide"
import UserSideVid from "./components/UserSideVid.jsx"
import Home from "./components/Home.jsx"
import RoomPage from "./components/RoomPage.jsx"
function App() {
  return (
    <>
      <Router>
        <Routes>
             <Route path="/" element={<Home/>}/>
            <Route path="/room/:roomId" element={<RoomPage/>}/>
        </Routes>
      </Router>
      {/* <HomeContent/>
      < UserSideVid/>
      <StreamerSide/> */}
    </>
  )
}

export default App
