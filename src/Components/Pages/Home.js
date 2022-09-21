import { render } from "@testing-library/react"
import React from "react"
import "../../App.css"
import Cards from "../Certificates"
import HeroSection from "../Profile"

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  )
}

export default Home
