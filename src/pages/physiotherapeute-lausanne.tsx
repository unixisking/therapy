import React from "react"
import { Navigation } from "../components/Navigation"

import HeaderImg from "../assets/images/services/physiotherapie/bg.png"
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
    <SEO
      title="TRAITEMENT PHYSIOTHÉRAPIE À Lausanne"
      description="Bénéficiez de nos techniques les plus avancées en physiothérapie. Votre physiothérapeute
vous propose un traitement personnalisé. Contactez-nous !"
    />
    <div className="relative h-screen">
      <Navigation />
      <img
        placeholder="none"
        id="bg-image"
        src={HeaderImg}
        alt=""
        className="hidden md:block sm:absolute z-10 top-0 h-screen right-0 w-screen object-cover blur-sm"
      />
      <div className="absolute top-0 w-96 sm:w-auto mt-48 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
        <h1 className="text-4xl 2xl:text-6xl font-bold text-primary md:text-white">
          Physiothérapeute Lausanne
        </h1>
        <p className="text-base text-grey md:text-white mt-4">
          Edelweiss Physio vous propose des traitements de physiothérapie.
          Découvrez comment nos physiothérapeutes Lausanne peuvent vous aider à
          retrouver une meilleure forme physique.
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
      title="Notre approche de la physiothérapie"
      description="
      Nos physiothérapeutes Lausanne mettent leurs compétences et leur savoir-faire à
votre disposition pour non seulement accélérer la guérison de vos blessures et
éliminer vos douleurs, mais aussi pour empêcher la survenue de problèmes
physiques plus graves.<br/><br/>
Dans notre cabinet de physiothérapie à Lausanne, nous parvenons à identifier les
parties corporelles affectées et à concevoir des traitements appropriés. Ainsi, nos
patients peuvent renforcer leurs articulations et muscles, développer leur équilibre,
et soulager leurs douleurs.

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
      description="Nos physiothérapeutes Lausanne maîtrisent plusieurs techniques de physiothérapie,
      parmi lesquelles on peut citer :"
      data={spec}
    />
    <Section
      isImageRight
      headline="À qui est destinée la physiothérapie ?"
      description="
      Au sein du cabinet Edelweiss Physio à Lausanne, nos soins sont destinés aux
personnes souffrant de douleurs qui les empêchent d'accomplir leurs activités
quotidiennes habituelles. Ils sont également destinés aux personnes qui souhaitent
simplement améliorer leurs capacités physiques et prévenir les blessures. Nos
programmes de renforcement musculaire proposés aux patients sont variés.
Demandez une consultation avec l'un de nos experts, qui se fera un plaisir de vous
proposer la meilleure thérapie pour vous.
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
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.1057689239028!2d6.600958848726108!3d46.52760210902785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c31c8a3f7ad0f%3A0x505904a541794d24!2sChem.%20du%20Viaduc%2012%2C%201008%20Prilly%2C%20Switzerland!5e0!3m2!1sen!2sdz!4v1645575533750!5m2!1sen!2sdz"
      allowFullScreen={true}
      loading="lazy"
      className="w-screen h-[400px]"
    ></iframe>
    <Footer
      description="Notre cabinet de physiothérapie à Lausanne contribue au bien-être de nos patients.
Rapidité, efficacité et prix abordable sont les maîtres mots. Nos physiothérapeutes
conçoivent des plans personnalisés en utilisant les dernières techniques et
approches pour améliorer les performances des patients."
    />
  </div>
)

export default IndexPage
