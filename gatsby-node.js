/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const slug = require("slug")
const { slash } = require("gatsby-core-utils")
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query QueryPrestationsTarifs {
      ghost: allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
            published_at
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query [gatsby-node]")
    return
  }

  const blogPostTemplate = path.resolve("src/templates/blog-post.js")
  const posts = result.data.ghost.edges
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  posts.forEach(({ node: { slug } }) => {
    createPage({
      path: `/blog/${slug}`,
      component: slash(blogPostTemplate),
      context: {
        slug: slug,
      },
    })
  })
}

/*

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-javascript' && process.env.ANALYZE_BUNDLE) {
    actions.setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 3001,
        }),
      ],
    });
  }
};
*/
// get all imageNodes
exports.sourceNodes = ({
  actions,
  cache,
  createNodeId,
  getNodesByType,
  store,
  reporter,
}) => {
  const { createNode } = actions
  const imageDownloads = []
  const GhostPost = getNodesByType("GhostPost")
  GhostPost.forEach(node => {
    const imageUrl = node.feature_image
    imageDownloads.push(
      createRemoteFileNode({
        url: imageUrl,
        store,
        cache,
        createNode,
        createNodeId,
        reporter,
      })
        .then(result => {
          if (!result) {
            return reporter.warn(`Could not download ${imageUrl}`)
          }
          node.feature_image_sharp___NODE = result.id
        })
        .catch(err => {
          reporter.warn(err)
        })
    )
  })
  return Promise.all(imageDownloads)
}
