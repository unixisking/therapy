import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/Navigation"

import HeaderImg from "../assets/images/homepage-header-img.png"
import linesImg from "../assets/images/lines.png"

import Footer from "../components/Footer"
import Section from "../components/Section"
import { StaticImage } from "gatsby-plugin-image"
import Bio from "../components/Bio"
import Faq from "../components/Faq"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="relative">
    <SEO
      title="Physiothérapie et rééducation Prilly"
      description="Edelweiss Physio est un cabinet de physiothérapie ayant pour objectif de
fournir un suivi personnalisé, où les besoins du patient sont prioritaires."
    />
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
          A Propos
        </h1>
        <p className="text-base text-grey md:text-white mt-4">
          Edelweiss Physio offre à ses patients les traitements les plus
          récents. Notre équipe ne cesse d'innover et de perfectionner son
          approche thérapeutique afin de garantir à ses patients une prise en
          charge optimale. Retrouvez ici plus d'informations à propos de notre
          cabinet de physiothérapie, du directeur, de notre mission et bien plus
          encore.
        </p>
        <Link
          to="/#reservez"
          className="py-4 px-12 whitespace-nowrap inline-flex items-center justify-center mt-2 border md:border-white shadow-sm text-base font-medium text-white bg-gradient-to-r from-primary to-secondary md:from-transparent md:to-transparent rounded-lg drop-shadow-lg focus:outline-none focus:shadow-outline hover:scale-110 ease-in duration-300"
        >
          Réservez Maintenant
        </Link>
      </div>
      <img
        src={linesImg}
        className="absolute hidden lg:block lg:-bottom-96 w-full"
      />
    </div>
    <Section
      title="Notre cabinet de physiothérapie à Prilly"
      description="
          Edelweiss Physio est un cabinet de physiothérapie dont la principale
          mission est de faire bénéficier les personnes atteintes de pathologies
          perturbant leurs mouvements, leurs capacités physiques, et leur santé
          en générale d'une physiothérapie de pointe. Nous nous occupons du
          diagnostic et du suivi thérapeutique des patients victimes de lésions
          musculo–squelettiques et neuromusculaires. Nous mettons à votre
          disposition des équipements performants, ainsi que des techniques
          thérapeutiques efficaces, afin que chaque patient ait droit à une
          prise en charge professionnelle et de qualité.
      "
      image={
        <StaticImage
          src="../assets/images/cabinet.png"
          placeholder="blurred"
          alt="Notre cabinet de physiothérapie à Prilly"
        />
      }
    />
    <Section
      isImageRight
      title="Notre objectif ? : être présent pour vous !"
      description="
          La principale préoccupation de nos physiothérapeutes est d’améliorer
          votre bien-être et votre santé physique.
          <br />
          Si vous êtes dans le canton de Vaud, à Prilly ou aux alentours, et que
          vous souhaitez retrouver votre forme, alors ne cherchez pas plus loin.
          Edelweiss Physio est là pour vous.
          <br />
          Nos physiothérapeutes font preuve de beaucoup de compassion, de
          compréhension, persévérance et par-dessus tout, ils sont passionnés
          par leur travail. Envie d'en connaître davantage sur nos thérapies et
          traitements ? N'hésitez pas à nous contacter.
      "
      image={
        <StaticImage
          src="../assets/images/objectif.png"
          placeholder="blurred"
          alt="Notre objectif ? : être présent pour vous !"
        />
      }
    />
    <Bio />
    <Faq />
    {/* <img
      className="w-screen"
      src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+ea3e72(6.6021,46.5281)/6.6031,46.528,14.56,0/1280x600?access_token=pk.eyJ1IjoiYnJhaGltaXNpZGFobWVkIiwiYSI6ImNrenlyZDZ2eTAzNGszZHQxNW94emh5a3UifQ.arT-fjYXk7ni-RD_NhxQ_g"
    /> */}
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
