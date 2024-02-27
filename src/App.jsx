import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomeContent, Navbar, SliderComp, Card } from "./components"
import StreamerSide from "./components/StreamerSide"
import UserSideVid from "./components/UserSideVid.jsx"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route to="/home" element={<HomeContent />} />
        </Routes>
      </Router>
      <HomeContent/>
      < UserSideVid/>
      <StreamerSide/>
    </>
  )
}

export default App
