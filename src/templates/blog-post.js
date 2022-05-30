import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

// import Favicon from "../images/favicon.ico"
import { FixedNavigation } from "../components/Navigation"

export default function BlogPostTemplate({ data }) {
  const post = data.ghostPost

  console.log("post data", post)
  return (
    <>
      <Helmet
        style={[
          {
            cssText: `
.kg-embed-card iframe {
  width: 100%;
  height: 450px;
}
      `,
          },
        ]}
      >
        {/* <link rel="icon" href={Favicon} />*/}
        <meta charSet="utf-8" />
        <title>{post.meta_title}</title>
        <meta name="description" content={post.meta_description} />
      </Helmet>
      <FixedNavigation />
      <div className="relative mt-24 lg:mt-36 py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {post.title}
              </span>
            </h1>
          </div>
          <div
            className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
        </div>
      </div>
    </>
  )
}

export const postQuery = graphql`
  query ($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      slug
      html
      meta_title
      meta_description
    }
  }
`
