import React from "react"
import styles from "../styles/footer.module.scss"
import Button from "./button"
import SocialButton from "./socialbutton"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FaCcVisa, FaCcMastercard } from "react-icons/fa"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={styles.wrapper}>
      <div className={styles.row1}>
        <h2 className={styles.title}>Spring gerust eens binnen!</h2>
        <div className={styles.actions}>
          <Link to="/contact">
            <Button style={styles.contactbutton} text="contacteer" />
          </Link>
          {/* <Link to="/order">
            <Button style={styles.orderbutton} text="plaats bestelling" />
          </Link> */}
        </div>
      </div>

      <div className={styles.row2}>
        <div className={styles.companyinfo}>
          <div className={styles.company}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/assets/images/svg/logo.svg"
                alt="logo"
                className={styles.logo}
              />
              <span className={styles.name}>Delhaize Dok Noord</span>
            </div>
            <div className={styles.address}>
              BVBA Bello Dok <br />
              Dok-Noord 7 <br />
              9000 Gent
            </div>
          </div>
          <div className={styles.algemene}>
            <span className={styles.algemeentitle}>Algmene informatie</span>
            <span className={styles.betaalmethode}>betaalmethoden</span>
            <br />
            <FaCcVisa />
            <FaCcMastercard />
          </div>

          <div className={styles.socials}>
            <div className={styles.contacts}>
              tel: 09 224 11 19 <br />
              mail: bello.dok@gmail.com
              <br />
              <SocialButton socialnetwork="facebook" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © Created by {data.site.siteMetadata.author}, 2020
      </div>
    </footer>
  )
}
