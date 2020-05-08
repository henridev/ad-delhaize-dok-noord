import React from "react"
import styles from "../styles/socialbutton.module.scss"
import { FaFacebook } from "react-icons/fa"

export default function socialbutton({ socialnetwork }) {
  let url = null
  let style = styles.facebookbutton
  let imgurl = "/png/facebook.png"
  let Icon = FaFacebook

  switch (socialnetwork) {
    case "facebook":
      style = styles.facebookbutton
      url =
        "https://www.facebook.com/DelhaizeDokNoord/?ref=br_tf&epa=SEARCH_BOX"
      Icon = FaFacebook
      break

    default:
      style = styles.facebookbutton
      url =
        "https://www.facebook.com/DelhaizeDokNoord/?ref=br_tf&epa=SEARCH_BOX"
      break
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon className={style}></Icon>
    </a>
  )
}
