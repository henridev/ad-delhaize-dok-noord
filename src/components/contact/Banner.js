import React from "react"

export default function Banner({ styles }) {
  return (
    <div
      style={{
        backgroundImage: `Url(/assets/images/svg/background.svg)`,
        width: "100%",
        height: "300px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={styles.banner}
    >
      <h2 className={styles.title}>contacteer ons</h2>
      <p className={styles.subtitle}>
        Heeft u een vraag of opmerking? Aarzel niet en neem contact met ons op
      </p>
    </div>
  )
}
