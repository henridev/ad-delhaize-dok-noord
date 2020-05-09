import React from "react"
import Item from "./spotlight/item"
import styles from "../styles/home.module.scss"

export default function Spotlight({
  titleOneSpot,
  titleTwoSpot,
  titleThreeSpot,
}) {
  return (
    <div className={styles.spotlightwrapper}>
      <h2 className={styles.title}>Promoties en spotlight</h2>
      <div className={styles.promotions}>
        <div className={styles.slides}>
          <Item
            title={titleOneSpot}
            imgSrc={"/assets/images/uploads/spot1.jpg"}
          />
          <Item
            title={titleTwoSpot}
            imgSrc={"/assets/images/uploads/spot2.jpg"}
          />
          <Item
            title={titleThreeSpot}
            imgSrc={"/assets/images/uploads/spot3.jpg"}
          />
          <span></span>
        </div>
      </div>
    </div>
  )
}
