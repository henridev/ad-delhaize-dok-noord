import React from "react"
import Feature from "./features/feature"
import styles from "../styles/home.module.scss"
// dd
export default function features({
  title,
  subtitle,
  feature1,
  feature2,
  feature3,
  feature4,
  feature1Text,
  feature2Text,
  feature3Text,
  feature4Text,
}) {
  return (
    <div className={styles.featureswrapper}>
      <div className={styles.heading}>
        <h2 className={styles.subtitle}>{title}</h2>
        <p className={styles.paragraph}>{subtitle}</p>
      </div>
      <div className={styles.features}>
        <Feature
          title={feature1}
          imgSrc="/assets/images/uploads/feature1.jpg"
          paragraph={feature1Text}
        />
        <Feature
          title={feature2}
          imgSrc="/assets/images/uploads/feature2.jpg"
          paragraph={feature2Text}
        />
        <Feature
          title={feature3}
          imgSrc="/assets/images/uploads/feature3.jpg"
          paragraph={feature3Text}
        />
        <Feature
          title={feature4}
          imgSrc="/assets/images/uploads/feature4.jpg"
          paragraph={feature4Text}
        />
      </div>
    </div>
  )
}
