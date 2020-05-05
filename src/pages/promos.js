import React from "react"
import { graphql } from "gatsby"
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

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/promos/*.md" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt
          headings {
            value
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
