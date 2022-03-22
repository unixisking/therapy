import React from "react"
import Navigation from "../components/Navigation"

import HeaderImg from "../assets/images/services/reeducation-cardiaque/bg.png"
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
    title: "Des exercices d'aérobic",
    desc: "Les physiothérapeutes vous proposent des exercices d'aérobic qui sont particulièrement bénéfiques pour le cœur, car ils augmentent votre rythme cardiaque et améliore la circulation sanguine.",
  },
  {
    title: "Exercices de renforcement musculaire",
    desc: "Le renforcement musculaire à un rôle important à jouer dans votre processus de traitement et de rééducation cardiaque. Les exercices de renforcement permettent de diminuer la pression exercée sur votre cœur durant vos tâches courantes de tous les jours.",
  },
  {
    title: "Les exercices d'échauffement et d'étirement",
    desc: "Notre équipe de physiothérapeutes prescrivent des d'exercices dits légers que les patients souffrant de problèmes cardiaques sévères pourront effectuer. Ils serviront aussi à préparer leur corps à fournir un effort physique plus intensif.",
  },
]

const IndexPage = () => (
  <div className="relative">
    <SEO
      title="Rééducation cardiaque Prilly"
      description="Affrontez les séquelles de l'insuffisance cardiaque, l'infarctus, etc en suivant nos
programmes de rééducation cardiaque. Contactez-nous au plus vite !"
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
          Rééducation Cardiaque
        </h1>
        <p className="text-base text-grey md:text-white mt-4">
          Les programmes de rééducation cardiaque incitent et aident les
          personnes atteintes de problèmes cardiovasculaires à améliorer leur
          mode de vie. Le cabinet de physiothérapie Edelweiss Physio sera là
          pour vous accompagner dans votre processus de guérison.
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
      title="Rééducation Cardiaque"
      description="
      La rééducation cardiaque est conçue pour vous aider à vous rétablir après un problème cardiovasculaire ou une chirurgie cardiaque.<br/>
Ces programme thérapeutiques vous vous aideront à retrouver vos forces, à apaiser vos douleurs et à prévenir l'apparition de nouveaux problèmes cardiovasculaires plus sérieux.<br/>
Nos physiothérapeutes vous accompagneront durant cette période pour vous remettre rapidement sur pied et vous mettre en confiance.

	 "
      image={
        <StaticImage
          src="../assets/images/services/reeducation-cardiaque/reeducation-cardiaque.png"
          placeholder="blurred"
          alt="Rééducation Cardiaque"
        />
      }
      to="#reservez"
      buttonText="Réservez Maintenant"
    />
    <ServiceSpec
      title="Quels types d'exercices vous seront proposés ? "
      description="Le programme de rééducation cardiaque vous fera pratiquer un ensemble d'exercices réguliers.
      Parmi ses exercices proposés, on trouve :"
      data={spec}
    />
    <Section
      isImageRight
      headline="À qui s'adresse la Rééducation Cardiaque ? "
      description="
      La rééducation cardiaque est destinée à tous les patients souffrant de graves problèmes cardiovasculaires, tels qu'un infarctus du myocarde, une insuffisance cardiaque, arythmie...<br/>
La réadaptation cardiaque est également prescrite aux personnes qui ont subi une chirurgie au niveau du cœur.<br/>
L'objectif d'un programme de rééducation cardiaque est de renforcer votre cœur et de vous inciter à améliorer votre hygiène de vie.
      "
      image={
        <StaticImage
          src="../assets/images/services/reeducation-cardiaque/audience.png"
          placeholder="blurred"
          alt="À qui s'adresse la Rééducation Cardiaque ? "
        />
      }
      to="#reservez"
      buttonText="Réservez Maintenant"
    />
    <ScheduleSecton action="https://formspree.io/f/mdobdelv" />
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
