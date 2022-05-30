import React from "react"
import { Navigation } from "../components/Navigation"

import HeaderImg from "../assets/images/homepage-header-img.png"
import linesImg from "../assets/images/lines.png"

import Footer from "../components/Footer"

const IndexPage = () => (
  <div className="relative">
    {/* <SEO title="Home" /> */}
    <div className="relative h-screen">
      <Navigation />
      <img
        placeholder="none"
        id="bg-image"
        src={HeaderImg}
        alt=""
        className="block absolute z-10 top-0 h-screen right-0 w-screen object-cover blur-sm"
      />
      <div className="absolute top-0 w-96 sm:w-auto mt-64 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
        <h1 className="text-4xl lg:text-6xl font-bold lg:mt-2 text-white">
          Merci de nous avoir contactés
        </h1>
        <p className="text-base text-white mt-4">
          Nous traitons en ce moment votre demande, un de nos collaborateurs va
          vous répondre dans quelques minutes.
        </p>
      </div>
      <img
        src={linesImg}
        className="absolute hidden lg:block lg:-bottom-96 w-full"
      />
    </div>
    <Footer />
  </div>
)

export default IndexPage
