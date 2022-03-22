import React from "react"
import Navigation from "../components/Navigation"

import HeaderImg from "../assets/images/services/rehabilitation-post-operatoire/bg.png"
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
    title: "Les exercices après une opération de remplacement de la hanche",
    desc: "La période de récupération à la suite d'une opération de remplacement de la hanche peut être longue. Les physiothérapeutes vous ferons effectuer des séances de rééducation afin de renforcer la hanche , de stabiliser et maintenir votre prothèse. Parmi ces exercices, vous trouverez : l'abduction de la hanche, monter et descendre des escaliers, la marche...",
  },
  {
    title: "Exercices post-chirurgie de l'épaule",
    desc: "Les exercices de rééducation de l'épaule ont pour but de favoriser la mobilité et la flexibilité. Parmi les exercices postopératoires de l'épaule, les patients peuvent effectuer les exercices suivants : l'antépulsion ou l'élévation de l'épaule, les pompes, le mouvement de balancier et rotation de l'épaule…",
  },
  {
    title: "Les exercices post-chirurgie du genou",
    desc: "Les ligaments croisés antérieurs sont l'une des blessures les plus fréquentes chez les athlètes. La rééducation dans ce cas est plus que nécessaire pour redonner force et souplesse au genou. Parmi les exercices de rééducation du genou, il peut y avoir : l'extension passive du genou, l'élévation de jambe, les glissades du talon...",
  },
  {
    title: "Exercices post-chirurgie de la colonne vertébrale",
    desc: "Le patient, après une intervention chirurgicale sur la colonne vertébrale, a besoin de séances de rééducation pour améliorer l'alignement, la balance et la coordination de son corps. Les physiothérapeutes  proposeront des exercices post opératoire de la colonne vertébrale tels que : étirement des nerfs, exercice du pont, extension des muscles du haut du corps...",
  },
]

const IndexPage = () => (
  <div className="relative">
    <SEO
      title="Réhabilitation post opératoire Prilly"
      description="Vous avez eu recours à une chirurgie ? Nous vous proposons un programme de rééducation
post opératoire pour accélérer votre guérison. Bienvenue chez nous !"
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
          Réhabilitation post opératoire
        </h1>
        <p className="text-base text-grey md:text-white mt-4">
          Edelweiss Physio déploie tous les efforts possibles pour vous aider à
          retrouver à nouveau vos fonctions physiques et pour faciliter et
          accélérer votre retour à la vie active après une intervention
          chirurgicale.
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
      title="Réhabilitation post opératoire"
      description="
      Nos physiothérapeutes vous proposent une rééducation postopératoire particulièrement intéressante pour les patients qui ont subi une intervention chirurgicale récemment.<br/>
Le traitement permet non seulement de diminuer la douleur du patient et de favoriser le processus de guérison et de récupération, mais permet également de prévenir les complications qui pourraient survenir après l'opération.
      
      "
      image={
        <StaticImage
          src="../assets/images/services/rehabilitation-post-operatoire/rehabilitation-post-operatoire.png"
          placeholder="blurred"
          alt="Réhabilitation post opératoire"
        />
      }
      to="#reservez"
      buttonText="Réservez Maintenant"
    />
    <ServiceSpec
      title="Exercices Post Opératoire"
      description="Nos physiothérapeutes proposent une série d'exercices ciblant la partie du corps qui a subi une intervention chirurgicale. Voici quelques-uns de ces exercices :"
      data={spec}
    />
    <Section
      headline="Comment la Réhabilitation post opératoire peut vous être utile ?"
      description="
      Le suivi d'un programme de rééducation post opératoire  est particulièrement bénéfique pour empêcher tout risque de complications post opératoire.<br/>
La rééducation post opératoire  stimule la circulation sanguine au niveau de la zone opérée afin d'accélérer sa cicatrisation, et de minimiser les risques de blessure grâce aux exercices de renforcement et de mobilité proposés dans le programme.<br/>
N'hésitez pas à prendre contact avec notre cabinet de physiothérapie pour vous aider à vous rétablir  rapidement.

      "
      image={
        <StaticImage
          src="../assets/images/services/rehabilitation-post-operatoire/audience.png"
          placeholder="blurred"
          alt="Comment la Réhabilitation post opératoire peut vous être utile ?"
        />
      }
      to="#reservez"
      buttonText="Réservez Maintenant"
    />
    <ScheduleSecton action="https://formspree.io/f/xqknlpdr" />
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
