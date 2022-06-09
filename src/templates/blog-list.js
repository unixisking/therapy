import React from "react"
import { graphql, Link } from "gatsby"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import clsx from "clsx"

import { FixedNavigation, Navigation } from "../components/Navigation"
import HeaderImg from "../assets/images/homepage-header-img.png"
import linesImg from "../assets/images/lines.png"

import Footer from "../components/Footer"
import SEO from "../components/seo"
import Section from "../components/Section"

const IndexPage = ({
  data: {
    allGhostPost: { edges: posts },
  },
  pageContext: { currentPage, numPages },
}) => {
  console.log("currentPage", currentPage)
  console.log("po", posts)
  return (
    <>
      <SEO
        title="Cabinet physiothérapie Prilly"
        description="Pour prendre rendez-vous, prière de nous appeler au +41 79 232 20 74 ou nous
contacter via le formulaire en ligne. Adresse. Chemin du viaduc 12, 1008 Prilly"
      />

      {currentPage === 1 ? (
        <>
          <div className="h-screen">
            <Navigation />
            <img
              placeholder="none"
              id="bg-image"
              src={HeaderImg}
              alt=""
              className="hidden md:block sm:absolute z-10 top-0 h-screen right-0 w-screen"
            />
            <div className="absolute top-0 w-96 sm:w-auto mt-64 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
              <h1 className="text-4xl 2xl:text-6xl font-bold text-primary md:text-white">
                Bienvenue sur notre blog
              </h1>
              <p className="text-base text-grey md:text-white mt-4">
                Edelweiss Physio s'engage à vous présenter un contenu instructif
                et opportun concernant les bienfaits et l'importance de la
                physiothérapie. Nos articles sont rédigés et conçus avec l’aide
                de notre physiothérapeute à qui vous pouvez faire confiance !
                N’hésitez pas à vous rendre régulièrement sur notre blog pour y
                lire des articles et des conseils afin d’améliorer votre santé
                et votre bien-être.
              </p>
            </div>

            <img
              src={linesImg}
              className="absolute hidden lg:block lg:-bottom-96 w-full"
            />
          </div>
          <div className="px-4 mx-auto sm:px-6 lg:max-w-7xl">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-primary">
              Dernier article
            </h1>

            <Section
              title={posts[0].node.title}
              description={posts[0].node.excerpt}
              buttonText="Lire la suite"
              to={posts[0].node.slug}
              image={
                <img
                  className="rounded-lg"
                  src={posts[0].node.feature_image}
                  placeholder="blurred"
                  alt="Notre objectif ? : être présent pour vous !"
                />
              }
            />
          </div>
          <div className="mt-16 lg:mt-24 px-4 mx-auto sm:px-6 lg:max-w-7xl">
            <a
              id="#articles-list"
              className="text-3xl lg:text-4xl font-extrabold text-primary"
            >
              Articles récents
            </a>
            <div className="max-w-lg mx-auto grid lg:gap-24 lg:grid-cols-3 lg:max-w-none">
              {posts.map(({ node: post }) => (
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  to={`/blog/${post.slug}`}
                  cardImg={post.feature_image}
                  type="Article"
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <FixedNavigation fixed={true} />
          <div className="mt-16 lg:mt-48 px-4 mx-auto sm:px-6 lg:max-w-7xl">
            <a
              id="#articles-list"
              className="text-3xl lg:text-4xl font-extrabold text-primary"
            >
              Articles récents
            </a>
            <div className="max-w-lg mx-auto grid lg:gap-24 space-x-12 lg:grid-cols-3 lg:max-w-none">
              {posts.map(({ node: post }) => (
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  to={`/blog/${post.slug}`}
                  cardImg={post.feature_image}
                  type="Article"
                />
              ))}
            </div>
          </div>
        </>
      )}

      <div className=" my-16 lg:mb-24 flex mx-auto">
        <Pagination currentPage={currentPage} numPages={numPages} />
      </div>

      <Footer />
    </>
  )
}
const BlogCard = ({ type, title, excerpt, to, cardImg }) => {
  return (
    <Link
      to={to}
      className="flex flex-col items-center justify-center lg:w-1/3 mt-14 rounded-lg shadow-lg overflow-hidden transform duration-150 scale-100 hover:scale-105"
      style={{ width: "420px" }}
    >
      <div className="flex-shrink-0">
        <img className="w-full object-cover" src={cardImg} alt={title} />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <p className="cursor-default">{type}</p>
          </p>
          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-600">{excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

/* This example requires Tailwind CSS v2.0+ */

const Pagination = ({ currentPage, numPages }) => {
  const nextPage = currentPage + 1 > numPages ? numPages : currentPage + 1
  const prevPage = currentPage - 1 < 1 ? 1 : currentPage - 1

  return (
    <div className="bg-white px-4 py-3 sm:px-6 mx-auto">
      <div className="">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <Link
              to={prevPage === 1 ? "/blog" : `/blog/page/${prevPage}`}
              className={clsx(
                "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
                {
                  "pointer-events-none": prevPage === 1,
                }
              )}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            {[...Array(numPages)].map((_, i) => (
              <Link
                to={i === 0 ? `/blog` : `/blog/page/${i + 1}`}
                aria-current="page"
                className={clsx(
                  "relative inline-flex items-center px-4 py-3 border text-sm font-medium",
                  {
                    "z-10 bg-indigo-50 border-indigo-500 text-indigo-600":
                      currentPage === i + 1,
                    "bg-white border-gray-300 text-gray-500 hover:bg-gray-50":
                      currentPage != i + 1,
                  }
                )}
              >
                {i + 1}
              </Link>
            ))}

            <Link
              to={`/blog/page/${nextPage}`}
              className={clsx(
                "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ",
                {
                  "pointer-events-none": nextPage === numPages,
                }
              )}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allGhostPost(
      skip: $skip
      limit: $limit
      sort: { fields: published_at, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          excerpt
          feature_image
          published_at
        }
      }
    }
  }
`

export default IndexPage
