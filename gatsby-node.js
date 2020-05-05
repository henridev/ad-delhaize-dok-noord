const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = handleNodeCreation

exports.createPages = async ({ graphql, actions, reporter }) => {
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
  console.log("object", JSON.stringify(response, null, 4))
  if (response.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  response.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPages(node, createPage)
  })
}

function handleNodeCreation({ node, getNode, actions }) {
  switch (node.internal.type) {
    case "MarkdownRemark":
      console.log("node creation for markdown")
      fmImagesToRelative(node)
      const { createNodeField } = actions
      const slug = createFilePath({ node, getNode, basePath: "markdown" })
      createNodeField({
        node,
        name: "slug",
        value: slug,
      })
      break
    case "SitePage":
      console.log("node creation for site page")
      break
    default:
      break
  }
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
