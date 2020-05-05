import React from "react"
import { Link } from "gatsby"
import styles from "../styles/vacancy.module.scss"
import { FaInfoCircle } from "react-icons/fa"

export default function Promo({
  title,
  description,
  to,
  date,
  excerpt,
  describe,
}) {
  return (
    <article key={to}>
      <header>
        <h3>
          <Link style={{ boxShadow: `none` }} to={to}>
            {title}
          </Link>
        </h3>
        <small>{date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: describe || excerpt,
          }}
        />
      </section>
      <FaInfoCircle></FaInfoCircle>
    </article>
  )
}
