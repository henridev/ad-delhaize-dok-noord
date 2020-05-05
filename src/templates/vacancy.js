import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/global/layout"
import styles from "./vacancy.module.scss"
import Img from "gatsby-image"

export default function Vacancy({ data }) {
  console.log("data", data)

  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      {featuredImgFluid && <Img fluid={featuredImgFluid} />}
      <div className={styles.container}>
        {/* <img src={``} alt="img"></img> */}
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
