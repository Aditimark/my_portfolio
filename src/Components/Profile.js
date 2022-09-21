import React from "react"
import "../App.css"
import { Button } from "./Button"
import "./Profile.css"
import { SocialIcon } from "react-social-icons"
import Typewriter from "typewriter-effect"

import Pdf from "../pdf/Resume.pdf"

function HeroSection() {
  return (
    <div className="hero-container" id="root">
      <video src="/images/video-1.mp4" autoPlay loop muted />
      <div className="colz-icon">
        <i>
          <SocialIcon
            url="https://www.linkedin.com/in/aditi-markande/"
            bgColor="white"
          />
        </i>
        <i>
          <SocialIcon url="https://github.com/Aditimark" bgColor="white" />
        </i>
        <i>
          <SocialIcon
            url="mailto:adi.markande@gmail.com"
            network="email"
            bgColor="white"
          />
        </i>
      </div>
      <div className="profile-details-name">
        <span className="primary-text">
          {" "}
          Hello! I am <span className="highlighted-text">Aditi Markande</span>
        </span>
      </div>
      <div className="profile-details-roles">
        <span className="primary-text">
          {" "}
          <h1>
            {" "}
            <Typewriter
              options={{
                strings: [
                  "Student 😎",
                  "Enthusiastic dev 🥳",
                  "Web developer 💻",
                  "React JS / Native Dev 💖",
                  "Flutter developer 📱",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <span className="profile-role-tagline">
            Enjoy building Apps and website using front-end developing skills.
            Creative and Artistic approch.
          </span>
        </span>
      </div>

      <div className="hero-btns">
        <a href={Pdf} target="_blank" rel="noreferrer">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
             View My Resume
          </Button>

        </a>
      </div>
    </div>
  )
}

export default HeroSection
