import React from "react"
import Navigation from "../components/Navigation"

import HeaderImg from "../assets/images/services/rehabilitation-preoperatoire/bg.png"
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
    title: "Des exercices d'échauffement musculaire et articulaire",
    desc: "Le but étant d'échauffer et de bien préparer tous les muscles et articulations à l'effort. Ainsi, cela vous évitera de vous blesser et d’aggraver davantage la zone qui va se faire opérer.",
  },
  {
    title: "Exercices de renforcement musculaire",
    desc: "Nos physiothérapeutes vous proposeront des exercices de renforcement musculaire destinés à affermir et à accroître la résistance du membre concerné par l'opération",
  },
  {
    title: "Les exercices d'étirement",
    desc: "Les physiothérapeutes de notre cabinet prescrivent à leurs patients une série d'étirement tels que les étirements pour le dos, les fessiers, les ischios, les mollets afin de gagner en stabilité et en mobilité, Le travail va en priorité cibler le muscle qui subira l'opération chirurgicale.",
  },
]

const IndexPage = () => (
  <div className="relative">
    <SEO
      title="Réhabilitation Préopératoire Prilly"
      description="Une chirurgie prévue prochainement ? Suivez un programme de réhabilitation préopératoire
afin de préparer votre corps à l'opération. Contactez-nous !"
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
          Réhabilitation préopératoire
        </h1>
        <p className="text-base text-grey md:text-white mt-4">
          Nos physiothérapeutes mettent en place un programme de réhabilitation
          préopératoire qui vous permet de vous préparer non seulement sur le
          plan physique, mais aussi sur le plan psychologique à votre opération.
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
      title="Réhabilitation préopératoire"
      description="
      Les séances de réhabilitation préopératoire préparent correctement votre corps à la chirurgie.<br/>
La rééducation préopératoire minimise les effets secondaires de la chirurgie et optimise ses résultats !<br/>
Elle permet également aux patients de se rétablir beaucoup plus rapidement que sans rééducation.<br/>
La rééducation préopératoire stimule votre mémoire musculaire afin que vos muscles et vos articulations puissent fonctionner correctement après la chirurgie.
      "
      image={
        <StaticImage
          src="../assets/images/services/rehabilitation-preoperatoire/rehabilitation-preoperatoire.png"
          placeholder="blurred"
          alt="Réhabilitation préopératoire"
        />
      }
      to="#reservez"
      buttonText="Réservez Maintenant"
    />
    <ServiceSpec
      title="Exercices de Réhabilitation préopératoire"
      description="Les physiothérapeutes proposent un ensemble de mouvements qui ciblent principalement la zone qui va subir l'opération. En voici quelques-uns :"
      data={spec}
    />
    <Section
      headline="Quand est-il recommandé d'effectuer une Réhabilitation préopératoire ?"
      description="
      La réhabilitation préopératoire est plus fréquemment prescrite dans le cadre de la chirurgie orthopédique, des blessures sportives ou des blessures dues à un accident de la route. Il peut s'agir notamment de foulures, déchirure ou luxation....<br/>
La réhabilitation préopératoire est notamment conseillée avant l'opération de remplacement de la hanche et la pose d'une prothèse du genou.<br/>

Pour bénéficier pleinement des bienfaits de la réhabilitation préopératoire, il est conseillé de s'y prendre le plus tôt possible. N'hésitez pas à nous contacter.

      "
      image={
        <StaticImage
          src="../assets/images/services/rehabilitation-preoperatoire/audience.png"
          placeholder="blurred"
          alt="Quand est-il recommandé d'effectuer une Réhabilitation préopératoire ?"
        />
      }
      to="#reservez"
      buttonText="Réservez Maintenant"
    />
    <ScheduleSecton action="https://formspree.io/f/mayvbedg" />
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
