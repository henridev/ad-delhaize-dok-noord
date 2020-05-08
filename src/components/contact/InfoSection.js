import React from "react"
import { FaPhone, FaFacebook, FaMailBulk } from "react-icons/fa"

export default function InfoSection({ styles }) {
  return (
    <div className={styles.infosection}>
      <img className={styles.contactpic} src="/assets/images/svg/contact.svg" />
      <div className={styles.infotexts}>
        <h3 className={styles.infotitle}>Adres</h3>
        <p className={styles.infoparagraph}>
          Dok-Noord 7 <br /> Gent 9000
        </p>
      </div>
      <div>
        <h3 className={styles.infotitle}>Telefoon</h3>
        <p className={styles.flex}>
          <FaPhone className={styles.icons} />
          <a href="tel:+62896706255135"> +62-896-7062-55135</a>
        </p>
      </div>
      <div>
        <h3 className={styles.infotitle}>Online</h3>
        <p className={styles.flex}>
          <FaFacebook className={styles.icons} />{" "}
          <a
            href={
              "https://www.facebook.com/DelhaizeDokNoord/?ref=br_tf&epa=SEARCH_BOX"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            bezoek onze facebook pagina
          </a>
        </p>
        <p className={styles.flex}>
          <FaMailBulk className={styles.icons} />{" "}
          <a href="mailto:bello.dok@gmail.com"> bello.dok@gmail.com</a>
        </p>
      </div>
    </div>
  )
}
