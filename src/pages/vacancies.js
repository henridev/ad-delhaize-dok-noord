import React from "react"
import { graphql } from "gatsby"
import Vacancy from "../components/vacancies/vacany"
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
              <Vacancy
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
        <img className={styles.image} src="/assets/images/uploads/team.jpg" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/vacancies/*.md" } }
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
