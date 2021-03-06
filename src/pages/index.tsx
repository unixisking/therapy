import React from "react"
import { Link } from "gatsby"
import { Navigation } from "../components/Navigation"

import WhyUs from "../components/WhyUs"
import Button from "../components/Button"

import HeaderImg from "../assets/images/homepage-bg.png"
import linesImg from "../assets/images/lines.png"

import WhoAreWeImg from "../assets/images/who-are-we.png"
import Services from "../components/Services"
import ScheduleSecton from "../components/ScheduleForm"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="relative">
    <SEO
      title="VOTRE CABINET DE PHYSIOTHÉRAPIE À PRILLY"
      description="Besoin de physiothérapie ? Faites appel à notre spécialiste, physiothérapeute
      et kinésithérapeute, dès aujourd'hui. Expertise et professionnalisme assurés."
    />
    {/* <SEO title="Home" /> */}
    <div
      className="relative h-screen"
      // style={{
      //   background: `url(${HeaderImg}) no-repeat center center / cover`,
      // }}
    >
      <Navigation />
      <img
        placeholder="none"
        id="bg-image"
        src={HeaderImg}
        alt=""
        className="hidden md:block sm:absolute z-10 top-0 h-screen right-0 w-screen object-cover blur-sm"
      />
      <div className="absolute top-0 w-96 sm:w-auto mt-64 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
        <h1 className="text-4xl 2xl:text-6xl font-bold text-primary md:text-white">
          Physiotherapie PRILLY-MALLEY
        </h1>
        <p className="text-base text-grey md:text-white mt-4">
          Notre équipe de physiothérapeutes diplômés et expérimentés vous
          accompagne dans votre processus de réhabilitation, et elle vous
          propose une multitude de thérapies intéressantes.
        </p>
        <Link
          to="#reservez"
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
    <WhyUs />
    <div className="mt-12 lg:mt-24 px-4 sm:px-6 lg:max-w-7xl grid grid-cols-1 lg:grid-cols-2 mx-auto sm:gap-16">
      <div className="pt-24 mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
          Qui sommes-nous ? En quoi notre cabinet de physiothérapie est unique ?
        </h2>
        <img src={WhoAreWeImg} alt="" className="w-96 mx-auto lg:hidden" />
        <p className="text-base text-grey mt-4">
          Notre équipe est pluridisciplinaire et hautement qualifiée avec plus
          de 20 ans d'expérience, notamment dans le domaine du traitement post
          opératoire, de la rééducation cardiaque, des pathologies chroniques… .
          <br />
          Notre équipe adopte une approche médicale novatrice et s'attache donc
          non seulement à traiter la douleur, mais aussi à traiter la source de
          la douleur.
          <br />
          Nos programmes vous permettront de vous remettre en forme, de gagner
          en souplesse, de retrouver votre équilibre et surtout de reprendre une
          vie plus saine et plus active.
        </p>
        <Button to="/#reservez" size="large">
          Réservez Une Séance Maintenant
        </Button>
      </div>
      <img src={WhoAreWeImg} alt="" className="hidden lg:block" />
    </div>
    <Services />

    <ScheduleSecton action="https://formspree.io/f/xrgjlplj" />
    {/* <div className="mt-24 lg:mt-32 max-w-xl px-4 sm:px-6 lg:max-w-7xl mx-auto grid grid-col-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-4 lg:max-w-2xl">
        <h2 className="text-3xl font-extrabold text-primary">
          Nous assurons un suivi professionnel{" "}
        </h2>
        <p className="text-base text-grey">
          Notre cabinet de physiothérapie à Prilly met tout en œuvre pour que
          nos patients puissent retrouver leur forme et améliorer leur bien-être
          rapidement en leur assurant une prise en charge sur-mesure qui leur
          permet d'atteindre leurs objectifs spécifiques. Nous vous garantissons
          un suivi hautement professionnel. En effet, quand vous vous présentez
          à votre premier rendez-vous, nous vous faisons passer un examen
          complet afin d'identifier précisément la cause de votre mal-être.
          Cette étape est particulièrement importante, car elle nous permet de
          mettre au point un programme qui favorise votre guérison.
        </p>
        <Link to="/" className="text-base text-primary flex items-center">
          Read more <ArrowRightIcon className="w-3 h-3 ml-1 text-primary" />
        </Link>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold text-primary">
          Un physiothérapeute qualifié & expérimenté
        </h2>
        <p className="text-base text-grey">
          Le physiothérapeute chargé du suivi des patients chez Super Masseur
          est hautement qualifié et a acquis une expérience significative en
          physiothérapie et en massothérapie.
          <br />
          Actif depuis une trentaine d'années, ce dernier est réputé auprès de
          ses patients pour la qualité et l'efficacité de ses prestations de
          physiothérapie.
        </p>
        <Link to="/" className="text-base text-primary flex items-center">
          Read more <ArrowRightIcon className="w-3 h-3 ml-1 text-primary" />
        </Link>
      </div>
    </div> */}
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
