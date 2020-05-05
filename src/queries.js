import { graphql } from "gatsby"

module.exports = {
  vacanciesPage: graphql`
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
  `,
  promosPage: graphql`
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
  `,
}
