import React, { Component } from "react"
import Navbar from "./Components/Navbar"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./Components/Pages/Home"

import Cards from "./Components/Certificates"

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/certi" element={<Cards />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
