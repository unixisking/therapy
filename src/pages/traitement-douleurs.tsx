import React from "react"
import Navigation from "../components/Navigation"

import HeaderImg from "../assets/images/services/traitement-douleurs/bg.png"
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
    title: "Des exercices aérobics",
    desc: "Ce type d'exercices stimule votre rythme cardiaque sans pour autant nuire à vos articulations. Ainsi, vous pourrez pratiquer la marche rapide ou faire du vélo fixe pour préparer votre corps aux exercices de renforcement musculaire.",
  },
  {
    title: "Exercices de renforcement",
    desc: "Les exercices de renforcement peuvent être effectués soit à l’aide de votre poids de corps, des machines, ou encore avec des bandes de résistance. Ces exercices sont destinés à renforcer vos muscles abdominaux, fessiers et dorsaux, ainsi que d'autres parties du corps.",
  },
  {
    title: "Étirements",
    desc: "Les étirements sont pratiqués délicatement, et sous l'œil attentif de votre physiothérapeute qui veille à ce que vous ne fassiez pas des étirements trop intenses.",
  },
  {
    title: "Exercices anti-douleur",
    desc: "Les exercices proposés sont destinés à soulager les parties douloureuses de votre corps (les genoux, le dos, les jambes, les bras,etc). Ainsi, vos douleurs s'estompent, et vous gagnerez en force et en flexibilité, ce qui améliorera votre qualité de vie.",
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
        className="block absolute z-10 top-0 h-screen right-0 w-screen object-cover blur-sm"
      />
      <div className="absolute top-0 w-96 sm:w-auto mt-48 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
        <h1 className="text-4xl lg:text-6xl font-bold lg:mt-2 text-white">
          Traitement douleurs
        </h1>
        <p className="text-base text-white mt-4">
          Edelweiss Physio vous propose des thérapies physiques de haut niveau.
          Découvrez comment nos physiothérapeutes peuvent vous aider à retrouver
          une meilleure forme physique.
        </p>
        <Link
          to="#reservez"
          className="py-4 px-12 whitespace-nowrap inline-flex items-center justify-center mt-4 border border-white shadow-sm text-base font-medium text-white background-transparent  rounded-lg drop-shadow-lg focus:outline-none focus:shadow-outline hover:scale-110 ease-in duration-300"
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
      title="Traitement Douleurs"
      description="
      Nos physiothérapeutes sont qualifiés pour traiter les douleurs physiques dont vous souffrez aujourd'hui.<br/>
Après un diagnostic approfondi, nos professionnels élaboreront pour vous un programme de traitement qui non seulement soulagera les douleurs, mais qui traitera aussi la source même du problème.<br/>
La physiothérapie est la solution idéale pour les personnes atteintes de douleurs chroniques ou de blessures. Elle peut améliorer votre condition physique et éradiquer vos douleurs.
      "
      image={
        <StaticImage
          src="../assets/images/services/traitement-douleurs/traitement-douleurs.png"
          placeholder="blurred"
          alt="Traitement Douleurs"
        />
      }
    />
    <ServiceSpec
      title="Exercices pour traitement de douleurs"
      description="Nos physiothérapeutes vous proposeront une série non exhaustive d'exercices pour traiter les douleurs. Vous trouverez parmi les exercices proposés :"
      data={spec}
    />
    <Section
      headline="Que Traitons-nous?"
      title="Douleur bas du dos/ haut du dos"
      description="
      La douleur bas du dos et la douleur haut du dos sont parmi les douleurs les plus fréquentes chez les patients.<br/>
Nos physiothérapeutes s'attaqueront d'abord à la source même de votre mal de dos afin de traiter efficacement la douleur.<br/>
Nos spécialistes en physiothérapie vous proposeront à cet effet une série d'exercices d'étirement et de renforcement ciblant le dos et l'ensemble de la colonne vertébrale.<br/>
Cela permettra non seulement de soulager vos douleurs et de faciliter vos mouvements, mais aussi de prévenir de nouvelles blessures.
	  "
      image={
        <StaticImage
          src="../assets/images/services/traitement-douleurs/td-audience-1.png"
          placeholder="blurred"
          alt="Douleur bas du dos/ haut du dos"
        />
      }
    />
    <Section
      isImageRight
      title="Douleur Epaule et Cou"
      description="
      Les douleurs aux épaules et au cou provoquent une gêne inconfortable voire handicapante. La physiothérapie est l'un des moyens les plus efficaces pour les traiter.<br/>
Nos professionnels pratiquent la physiothérapie manuelle en employant des techniques visant à minimiser la raideur et les tensions au niveau du cou et les épaules.<br/>
Nos physiothérapeutes vous proposent aussi une série d'exercices qui vous permettront de travailler et de renforcer les muscles et les tissus de ces parties du corps.
      "
      image={
        <StaticImage
          src="../assets/images/services/traitement-douleurs/td-audience-2.png"
          placeholder="blurred"
          alt="Douleur Epaule et Cou"
        />
      }
    />
    <Section
      title="Douleur poignet, coude et main"
      description="
      Nos physiothérapeutes élaboreront pour vous un programme thérapeutique visant à soigner efficacement vos douleurs au poignet, au coude et à la main. Cela vous permettra de mener à bien vos tâches quotidiennes sans aucune gêne.<br/>
Notre équipe commencera par effectuer une évaluation complète des zones concernées, puis elle proposera la thérapie qui améliorera et renforcera vos articulations.<br/>
Il vous sera demandé d'effectuer des exercices ciblés en conséquence.
	  "
      image={
        <StaticImage
          src="../assets/images/services/traitement-douleurs/td-audience-3.png"
          placeholder="blurred"
          alt="Douleur poignet, coude et main"
        />
      }
    />
    <Section
      isImageRight
      title="Douleur pied et cheville"
      description="
      Notre cabinet de physiothérapie vous aidera à soigner vos blessures et vos douleurs aux pieds et aux chevilles.<br/>
Nos physiothérapeutes effectueront un examen complet pour identifier la source de vos douleurs. Une fois cela fait, ils vous proposeront un protocole de traitement adapté qui aura pour but de faire disparaître les douleurs.<br/>
Ce traitement associe généralement des méthodes thérapeutiques manuelles ciblées, des exercices d'étirement et de renforcement des muscles du pied et de la cheville.
	  "
      image={
        <StaticImage
          src="../assets/images/services/traitement-douleurs/td-audience-4.png"
          placeholder="blurred"
          alt="Douleur pied et cheville"
        />
      }
    />
    <Section
      title="Douleur Genou et Hanche"
      description="
      Edelweiss Physio peut vous aider à traiter les douleurs de la hanche et du genou.<br/>
Nos physiothérapeutes examineront vos hanches et/ou vos genoux pour y déceler une éventuelle anomalie de position ou de structure avant de vous prescrire un programme de physiothérapie adéquat.<br/>
Ils vous soumettront à un ensemble d'exercices visant à réduire et à éliminer les douleurs et à renforcer les tissus fragilisés des hanches et/ou des genoux.

	  "
      image={
        <StaticImage
          src="../assets/images/services/traitement-douleurs/td-audience-5.png"
          placeholder="blurred"
          alt="Douleur Genou et Hanche"
        />
      }
    />
    <ScheduleSecton action="https://formspree.io/f/mrgjlpao" />
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
