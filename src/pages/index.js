import React from "react"
import { graphql } from "gatsby"

//#region component
import Layout from "../components/global/layout"
import Landing from "../components/home/landing"
import Features from "../components/home/features"
import Team from "../components/home/team"
import Spotlight from "../components/home/spotlight"
//#endregion components

import styles from "./styles/index.module.scss"

export default function HomePage({ data }) {
  const {
    markdownRemark: {
      frontmatter: {
        subtitleTwo,
        subtitleThree,
        subtitleOne,
        titleThree,
        titleTwo,
        titleOne,
        titleOneSpot,
        titleTwoSpot,
        titleThreeSpot,
        feature1,
        feature2,
        feature3,
        feature4,
        feature1Text,
        feature2Text,
        feature3Text,
        feature4Text,
      },
    },
  } = data
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.home}>
          <Landing title={titleOne} subtitle={subtitleOne} />
          <Team title={titleTwo} subtitle={subtitleTwo} />
          <Features
            title={titleThree}
            subtitle={subtitleThree}
            feature1={feature1}
            feature2={feature2}
            feature3={feature3}
            feature4={feature4}
            feature1Text={feature1Text}
            feature2Text={feature2Text}
            feature3Text={feature3Text}
            feature4Text={feature4Text}
          />
          <Spotlight
            titleOneSpot={titleOneSpot}
            titleTwoSpot={titleTwoSpot}
            titleThreeSpot={titleThreeSpot}
          />
        </main>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { glob: "**/home.md" }) {
      frontmatter {
        subtitleTwo
        subtitleThree
        subtitleOne
        titleThree
        titleTwo
        titleOne
        titleOneSpot
        titleTwoSpot
        titleThreeSpot
        feature1
        feature2
        feature3
        feature4
        feature1Text
        feature2Text
        feature3Text
        feature4Text
      }
    }
  }
`
