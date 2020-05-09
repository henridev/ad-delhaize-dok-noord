import React from "react"
import styles from "../../styles/home.module.scss"

export default function Openinghours() {
  return (
    <table className={styles.openinghourswrapper}>
      <tr
        id="Monday"
        itemprop={styles.openinghours}
        title="Open Monday at 8am to 20pm"
      >
        <td>Maandag</td>
        <td className={styles.opens}>13:00</td>
        <td>-</td>
        <td className={styles.closed}>20:00</td>
      </tr>
      <tr
        id="Tuesday"
        itemprop={styles.openinghours}
        title="Open Tuesday at 8am to 20pm"
      >
        <td>Dinsdag</td>
        <td className={styles.opens}>08:00</td>
        <td>-</td>
        <td className={styles.closed}>20:00</td>
      </tr>
      <tr
        id="Wednesday"
        itemprop={styles.openinghours}
        title="Open Wednesday at 8am to 20pm"
      >
        <td>Woensdag</td>
        <td className={styles.opens}>08:00</td>
        <td>-</td>
        <td className={styles.closed}>20:00</td>
      </tr>
      <tr
        id="Thursday"
        itemprop={styles.openinghours}
        title="Open Thursday at 8am to 8pm"
      >
        <td>Donderdag</td>
        <td className={styles.opens}>08:00</td>
        <td>-</td>
        <td className={styles.closed}>20:00</td>
      </tr>
      <tr
        id="Friday"
        itemprop={styles.openinghours}
        title="Open Friday at 8am to 20pm"
      >
        <td>Vrijdag</td>
        <td className={styles.opens}>08:00</td>
        <td>-</td>
        <td className={styles.closed}>20:00</td>
      </tr>
      <tr
        id="Saturday"
        itemprop={styles.openinghours}
        title="Open Saturday at 8am to 20pm"
      >
        <td>Zaterdag</td>
        <td className={styles.opens}>08:00</td>
        <td>-</td>
        <td className={styles.closed}>20:00</td>
      </tr>
      <tr
        id="Sunday"
        itemprop={styles.openinghours}
        title="Open Sunday at 81am to 13pm"
      >
        <td>Zondag</td>
        <td className={styles.opens}>08:00</td>
        <td>-</td>
        <td className={styles.closed}>13:00</td>
      </tr>
    </table>
  )
}
