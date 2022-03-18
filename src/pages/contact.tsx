import React from "react"
import Navigation from "../components/Navigation"

import HeaderImg from "../assets/images/homepage-header-img.png"
import linesImg from "../assets/images/lines.png"

import Footer from "../components/Footer"
import ContactSection from "../components/ContactSection"

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
        className="hidden md:block sm:absolute z-10 top-0 h-screen right-0 w-screen"
      />
      <div className="absolute top-0 w-96 sm:w-auto mt-64 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
        <h1 className="text-4xl 2xl:text-6xl font-bold text-primary md:text-white">
          Prenez contact avec nous
        </h1>
        <p className="text-base text-grey md:text-white mt-4">
          Notre cabinet de physiothérapie Edelweiss Physio fera un plaisir de
          vous renseigner sur toutes les questions ou préoccupations relatives à
          nos services de physiothérapie, notre disponibilité et nos honoraires.
        </p>
      </div>
      <img
        src={linesImg}
        className="absolute hidden lg:block lg:-bottom-96 w-full"
      />
    </div>

    <ContactSection />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.1057689239028!2d6.600958848726108!3d46.52760210902785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c31c8a3f7ad0f%3A0x505904a541794d24!2sChem.%20du%20Viaduc%2012%2C%201008%20Prilly%2C%20Switzerland!5e0!3m2!1sen!2sdz!4v1645575533750!5m2!1sen!2sdz"
      allowFullScreen={true}
      loading="lazy"
      className="w-screen h-[400px]"
    ></iframe>
    <Footer />
  </div>
)

export default IndexPage
