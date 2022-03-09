import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/Navigation"

import WhyUs from "../components/WhyUs"
import Button from "../components/Button"
// import Layout from "../components/layout"

import HeaderImg from "../assets/images/homepage-header-img.png"
import OneImg from "../assets/images/one.png"
import TwoImg from "../assets/images/two.png"
import ThreeImg from "../assets/images/three.png"
import FourImg from "../assets/images/four.png"
import HealthImg from "../assets/images/health.png"
import linesImg from "../assets/images/lines.png"

import SecondaryCta from "../components/SecondaryCta"
import Footer from "../components/Footer"
import Section from "../components/Section"
import { StaticImage } from "gatsby-plugin-image"
import Bio from "../components/Bio"
import Faq from "../components/Faq"

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
          A Propos
        </h1>
      </div>
      <img
        src={linesImg}
        className="absolute hidden lg:block lg:-bottom-96 w-full"
      />
    </div>
    <div className="mt-12 lg:mt-24 max-w-xl px-4 sm:px-6 lg:max-w-7xl mx-auto grid grid-col-1 lg:grid-cols-3 gap-24">
      <div className="lg:col-span-1 space-y-4 lg:max-w-2xl">
        <h2 className="text-3xl font-extrabold text-primary">
          Notre cabinet de physiothérapie à Prilly
        </h2>
        <p className="text-base text-grey">
          Super Masseur est un cabinet de physiothérapie dont la principale
          mission est de faire bénéficier les personnes atteintes de pathologies
          perturbant leurs mouvements, leurs capacités physiques, et leur santé
          générale d'une physiothérapie de pointe.
          <br />
          Nous nous occupons du diagnostic et du suivi thérapeutique des
          patients victimes de lésions musculo–squelettiques et
          neuromusculaires.
          <br />
          Nous mettons à votre disposition des équipements performants, ainsi
          que des techniques thérapeutiques fiables, afin que chaque patient ait
          droit à une prise en charge professionnelle et de qualité.
        </p>
      </div>
      <div className="col-span-2 space-y-4">
        <h2 className="text-3xl font-extrabold text-primary">
          Notre objectif ? : être présent pour vous !
        </h2>
        <p className="text-base text-grey max-w-2xl">
          Dans notre cabinet de physiothérapie, notre principale préoccupation
          est de participer à votre bien-être et d'améliorer ainsi votre santé
          physique.
          <br />
          Si vous êtes dans le canton de Vaud, à Prilly ou aux alentours, et que
          vous souhaitez retrouver votre forme, alors ne cherchez pas plus loin.
          Super Masseur est à votre disposition comme l'un des cabinets de
          physiothérapie à privilégier à Prilly. <br />
          Nous vous précisons également que notre physiothérapeute a 30 ans
          d'expérience dans le domaine et qu'il sera ravi de vous recevoir dans
          son cabinet afin de vous créer un programme adapté à vos besoins.
          Notre physiothérapeute fait preuve de beaucoup de compassion, de
          compréhension, de respect, de persévérance et par-dessus tout, il est
          passionné par son travail.
          <br />
          Envie d'en connaître davantage sur nos prestations ? N'hésitez pas à
          nous joindre par téléphone à{" "}
          <a href="tel:+41792322074">+41 79 232 20 74</a> ou via notre
          formulaire en ligne.
        </p>
      </div>
    </div>
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
