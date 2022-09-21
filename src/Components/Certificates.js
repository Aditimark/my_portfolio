import React from "react"
import "./Certificates.css"
import CardItem from "./CardsItem.js"
import { AnimationOnScroll } from "react-animation-on-scroll"

function Cards() {
  return (
    <AnimationOnScroll
      animateIn="animate__zoomIn"
      animateOut="animate__slideInRight"
    >
      <div className="cards" id="certificates">
        <br />
        <h1>Check out My Certificates!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images\1stop_ProjectCertificate.jpg"
                text=" Project Completion Certificate "
                label="Web Deveopment"
                body="Project Completion Certificate by Raise Digita for completing the Web Development course and corresponding E-Commerce Websites "
              />
              <CardItem
                src="images\CertificateOfCompletion_Adobe XD Essential Training Design 2020 Q1.jpg"
                text="Adobe XD Essential Training Design Course "
                label="Adobe XD"
                body="This is a course offered By Linkedin Learning "
              />
              <CardItem
                src="images\HTML5 Course Certificate.jpg"
                text="HTML5 Course "
                label="HTML5"
                body="This is a course offered By University of Michigan in Coursera "
              />
              <CardItem
                src="images\Introduction to CSS3 Course Certificate.jpg"
                text="CSS3 Course "
                label="CSS3"
                body="This is a course offered By University of Michigan in Coursera "
              />

              <CardItem
                src="images\Interactivitywith JavaScript Course Certificate.jpg"
                text="JavaScript Course "
                label="JavaScript"
                body="This is a course offered By University of Michigan in Coursera "
              />
              <CardItem
                src="images\Python Basic Course Certificate.jpg"
                text="Python Basic Course "
                label="Python "
                body="This is a course offered By University of Michigan in Coursera "
              />
              <CardItem
                src="images\Python Data Structures Course Certificate.jpg"
                text="Python Data Structures  Course "
                label="Python "
                body="This is a course offered By University of Michigan in Coursera "
              />
            </ul>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Cards
