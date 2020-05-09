import React, { useRef } from "react"
import styles from "../styles/home.module.scss"
import Button from "../global/button"
import Openinghours from "./landing/openinghours"

export default function Landing({ title, subtitle }) {
  const modal = useRef(null)

  function handleClick(e) {
    modal.current.style.display === "block"
      ? (modal.current.style.display = "none")
      : (modal.current.style.display = "block")
  }

  function closeModal(e) {
    e.target.style.display = "none"
  }

  return (
    <div className={styles.landingwrapper}>
      <div className={styles.left}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.paragraph}> {subtitle}</p>
        <Button
          handleClick={handleClick}
          text="openingsuren"
          style={styles.button}
        ></Button>
      </div>
      <img
        src={"/assets/images/svg/top.svg"}
        alt="store"
        className={styles.image}
      />
      <div
        ref={modal}
        className={styles.openingsuren}
        id="modal"
        onClick={closeModal}
      >
        <Openinghours />
      </div>
    </div>
  )
}
