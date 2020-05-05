import React from "react"
import { promosPage } from "../queries"
import Promo from "../components/promos/promo"
import Layout from "../components/global/layout"
import styles from "./styles/vacancies.module.scss"

export default function Vacancies({ data }) {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <h3 className={styles.title}>Alle vacatures</h3>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <Promo
                to={node.fields.slug}
                key={node.id}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                describe={node.frontmatter.description}
                excerpt={node.excerpt}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = promosPage
