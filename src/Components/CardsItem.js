import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Modal from "react-bootstrap/Modal"

function CardItem(props) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Certificate "
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
          <button className="cards_item__button" onClick={handleShow}>
            {" "}
            View{" "}
          </button>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.text}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="cards__item__imgs"
              alt="Certificate "
              src={props.src}
            />
            <br />
            <p className="cards__item__text">{props.body}</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
      </li>
    </>
  )
}

export default CardItem
