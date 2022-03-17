import React from "react"
import Navigation from "../components/Navigation"

import HeaderImg from "../assets/images/services/physiotherapie/bg.png"
import linesImg from "../assets/images/lines.png"

import SecondaryCta from "../components/SecondaryCta"
import Footer from "../components/Footer"
import Section from "../components/Section"
import { StaticImage } from "gatsby-plugin-image"
import ScheduleSecton from "../components/ScheduleForm"
import ServiceSpec from "../components/ServiceSpec"
import { Link } from "gatsby"

const spec = [
  {
    title: "Thérapie manuelle",
    desc: "La thérapie manuelle regroupe une série de techniques manuelles incluant notamment la mobilisation des tissus mous, des articulations et des manipulations articulaires. La thérapie manuelle atténue la douleur, optimise la mobilité et favorise les fonctions.",
  },
  {
    title: "Étirements",
    desc: "Nos physiothérapeutes vous proposent une série d'exercices pour améliorer la souplesse des mouvements du corps. Les physiothérapeutes élaborent les exercices d'étirement appropriés pour parvenir à la flexibilité souhaitée.",
  },
  {
    title: "Trigger point",
    desc: "Afin de soulager les migraines, les douleurs de dos et les douleurs articulaires, la technique du trigger point est également employée en physiothérapie. Elle permet aussi de traiter les douleurs sciatiques et l'épicondylite.",
  },
  {
    title: "L'électrothérapie",
    desc: "L'électrothérapie est un traitement qui fait usage de courants électriques puissants ou de faibles fréquences à des fins thérapeutiques. Elle aide à traiter les douleurs, à renforcer ou à tonifier les muscles, ainsi qu'à réduire les inflammations et les contractions musculaires.",
  },
]

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
        className="hidden sm:block sm:absolute z-10 top-0 h-screen right-0 w-screen object-cover blur-sm"
      />
      <div className="absolute top-0 w-96 sm:w-auto mt-48 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary sm:text-white">
          Physiotherapie Prilly-MALLEY
        </h1>
        <p className="text-base text-grey sm:text-white mt-4">
          Edelweiss Physio vous propose des traitement de physiotherapie.
          Découvrez comment nos physiothérapeutes peuvent vous aider à retrouver
          une meilleure forme physique.
        </p>
        <Link
          to="#reservez"
          className="py-4 px-12 whitespace-nowrap inline-flex items-center justify-center mt-2 border sm:border-white shadow-sm text-base font-medium text-white sm:background-transparent bg-gradient-to-r from-primary to-secondary rounded-lg drop-shadow-lg focus:outline-none focus:shadow-outline hover:scale-110 ease-in duration-300"
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
      title="Notre approche de la physiothérapie"
      description="
      Nos physiothérapeutes mettent leurs compétences et leur savoir-faire à votre disposition pour non seulement accélérer la guérison de vos blessures et éliminer vos douleurs, mais aussi pour empêcher la survenue de problèmes physiques plus graves.<br/>
Nos physiothérapeutes arrivent à identifier les parties corporelles affectées et à concevoir des traitements appropriés.
Ainsi, nos patients peuvent renforcer leurs articulations et muscles, développer leur équilibre, et soulager leurs douleurs.
      "
      image={
        <StaticImage
          src="../assets/images/services/physiotherapie/physiotherapie.png"
          placeholder="blurred"
          alt="Physiotherapie"
        />
      }
      to="#reservez"
      buttonText="Réservez Maintenant"
    />
    <ServiceSpec
      title="Techniques de physiothérapie"
      description="Nos physiothérapeutes maîtrisent plusieurs techniques de physiothérapie, parmi lesquelles on peut citer :"
      data={spec}
    />
    <Section
      isImageRight
      headline="À qui est destinée la physiothérapie ?"
      description="
      La physiothérapie est destinée aux personnes souffrant de douleurs les empêchant d'accomplir leurs activités journalières habituelles. Elle s'adresse également aux personnes voulant simplement améliorer leurs capacités physiques et prévenir les blessures. Nous vous proposons différents programmes de renforcement musculaire. Si vous souhaitez demander une consultation avec l'un de nos experts, il se fera un plaisir de vous proposer la meilleure thérapie pour vous.
      "
      image={
        <StaticImage
          src="../assets/images/services/physiotherapie/physio-audience.png"
          placeholder="blurred"
          alt="Massage"
        />
      }
      to="#reservez"
      buttonText="Réservez Maintenant"
    />
    <ScheduleSecton action="https://formspree.io/f/xoqrlenw" />
    <SecondaryCta />
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
