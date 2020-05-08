import React from "react"
import styles from "../styles/home.module.scss"

export default function Team() {
  return (
    <div className={styles.teamwrapper}>
      <img
        src={`/assets/images/svg/team.svg`}
        alt="team"
        className={styles.image}
      />
      <div className={styles.right}>
        <h2 className={styles.title}>Ons team staat voor u klaar</h2>
        <p className={styles.paragraph}>
          Ons top team staat steed paraat met raad en daad. Heeft u een vraag,
          vind u een product niet of wilt u gewoon een gezelge babbel slaan bij
          ons kan het zeker.
        </p>
      </div>
    </div>
  )
}
