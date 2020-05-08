import React from "react"
import styles from "../../styles/home.module.scss"

export default function Feature({ title, imgSrc, paragraph }) {
  return (
    <div className={styles.featureitem}>
      {/* <div className={styles.background}></div> */}
      <div
        style={{
          backgroundImage: `Url(${imgSrc})`,
          width: "300px",
          height: "200px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "20px",
          position: "relative",
          right: "70px",
        }}
      />
      <div className={styles.textarea}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.paragraph}>{paragraph}</p>
      </div>
    </div>
  )
}
