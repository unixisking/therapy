import React from "react"
import { Navigation } from "../components/Navigation"

import HeaderImg from "../assets/images/services/reeducation-sportive/bg.png"
import linesImg from "../assets/images/lines.png"

import Footer from "../components/Footer"
import Section from "../components/Section"
import { StaticImage } from "gatsby-plugin-image"
import ScheduleSecton from "../components/ScheduleForm"
import ServiceSpec from "../components/ServiceSpec"
import { Link } from "gatsby"
import SEO from "../components/seo"

const spec = [
  {
    title: "1. un traitement visant à minimiser les douleurs et les enflures.",
    desc: "La toute première manifestation de l'organisme en cas de blessure ou de traumatisme est des douleurs dans la partie touchée. Le repos et le froid seront probablement au programme du traitement durant cette phase. Il se peut également que la blessure nécessite le port d'un plâtre, une attelle ou un bandage pour couvrir la partie blessée et ne pas aggraver la blessure.",
  },
  {
    title: "2.  exercices pour regagner une certaine aisance de mouvement",
    desc: "Vos physiothérapeutes vous recommanderont des exercices de mobilisation des articulations pour retrouver une certaine fluidité de mouvement. Ils prescriront des exercices de flexibilité adaptés à la nature de votre blessure, vous permettant ainsi de reprendre le contrôle de vos mouvements.",
  },
  {
    title: "3. exercices pour retrouver sa force physique",
    desc: "Des exercices cardiovasculaires de type marche rapide, vélo stationnaire..., ou encore des exercices légers pourront être suggérés dans le cadre de votre rééducation sportive. Ces derniers ont pour but de renforcer et de conditionner le corps, ainsi que de développer votre résistance.",
  },
  {
    title: "4. des exercices pour recouvrer vos fonctions physiques",
    desc: "Les athlètes se consacrent, pendant cette phase qui précède la reprise du sport, à la pratique d'activités liées à leur activité sportive. Les physiothérapeutes veillent à ce les séances augmentent progressivement en vitesse et en intensité.  L'objectif est de faire reprendre à l'athlète son activité sportive principale.",
  },
]

const IndexPage = () => (
  <div className="relative">
    <SEO
      title="Rééducation Sportive Prilly"
      description="Perfectionnez vos performances physiques ou reprenez vos activités sportives avec nos
programmes de réhabilitation sportive. Réservez un RDV maintenant."
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
      <div className="absolute top-0 w-96 sm:w-auto mt-48 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
        <h1 className="text-4xl 2xl:text-6xl font-bold text-primary md:text-white">
          Rééducation Sportive
        </h1>
        <p className="text-base text-grey md:text-white mt-4">
          Les athlètes ont tendance à perdre leur force, leur mobilité et leur
          souplesse suite à une blessure sportive ou à une opération. La
          rééducation sportive comme thérapie constitue une excellente solution
          pour récupérer la forme.
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
        className="absolute hidden lg:block lg:-bottom-72 w-full"
      />
    </div>
    <div className="-mt-12 lg:-mt-24" />
    <Section
      isImageRight
      title="Rééducation Sportive"
      description="
	  La rééducation sportive est une approche qui se concentre particulièrement sur la récupération et la prévention des blessures liées au sport.<br/>

Le but, également, est de développer les capacités fonctionnelles, physiques et motrices des athlètes.<br/>

Le physiothérapeute procède à une évaluation complète de votre état physique et vous prescrira par la suite des exercices de physiothérapie et de réadaptation en fonction de vos besoins.<br/>

Vous serez prêt à retrouver vos activités sportives habituelles grâce à nos physiothérapeutes qualifiés.

      "
      image={
        <StaticImage
          src="../assets/images/services/reeducation-sportive/reeducation-sportive.png"
          placeholder="blurred"
          alt="Rééducation Sportive"
        />
      }
      to="#reservez"
      buttonText="Réservez Maintenant"
    />
    <ServiceSpec
      title="Programme de rééducation sportive"
      description="Le physiothérapeute propose une série d'exercices ciblés à réaliser au cours de ces 4 phases de traitement."
      data={spec}
    />
    <Section
      headline="Dans quels cas la rééducation sportive est-elle nécessaire ?"
      description="
	  Les blessures sportives ne sont pas à prendre à la légère et doivent être rapidement prises en charge par un professionnel.

Les athlètes subissent le plus souvent des blessures sportives de type fracture ou luxation, gonflement musculaire, déchirure musculaire et autres blessures articulaires...
Nos physiothérapeutes vous aideront à vous rétablir rapidement afin que vous repreniez vos activités sportives habituelles. Demander un rendez-vous aujourd'hui !
      "
      image={
        <StaticImage
          src="../assets/images/services/reeducation-sportive/audience.png"
          placeholder="blurred"
          alt="Dans quels cas la rééducation sportive est-elle nécessaire ?"
        />
      }
      to="#reservez"
      buttonText="Réservez Maintenant"
    />
    <ScheduleSecton action="https://formspree.io/f/xlezljpr" />
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
