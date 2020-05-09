const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = handleNodeCreation
exports.createPages = executePageCreation

function handleNodeCreation({ node, getNode, actions }) {
  switch (node.internal.type) {
    case "MarkdownRemark":
      console.log("FOUND MARKDOWN NODE")
      fmImagesToRelative(node)
      const { createNodeField } = actions
      // creating path to use to reach the page
      const slug = createFilePath({ node, getNode, basePath: "markdown" })
      // provides us with url paths we can query later
      createNodeField({
        node,
        name: "slug",
        value: slug,
      })
      break
    case "SitePage":
      console.log("FOUND SITEPAGE NODE")
      break
  }
}

async function executePageCreation({ graphql, actions, reporter }) {
  const { createPage } = actions
  const response = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (response.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  response.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPages(node, createPage)
  })
}

function createPages(node, createPage, resolve) {
  if (node.fileAbsolutePath.includes("vacancies")) {
    const vacancyTemplate = path.resolve("./src/templates/vacancy.js")
    createPage({
      path: node.fields.slug,
      component: vacancyTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  }
  if (node.fileAbsolutePath.includes("promotions")) {
    const promoTemplate = path.resolve("./src/templates/promo.js")
    createPage({
      path: node.fields.slug,
      component: promoTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  }
}
