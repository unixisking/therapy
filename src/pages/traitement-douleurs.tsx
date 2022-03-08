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
      <div className="absolute top-0 w-96 sm:w-auto mt-64 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
        <h1 className="text-4xl lg:text-6xl font-bold lg:mt-2 text-white uppercase">
          Traitement douleurs
        </h1>
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
      description="Notre physiothérapeute possède les compétences requises pour soigner les douleurs physiques que vous rencontrez actuellement. Après avoir procédé à un diagnostic minutieux, il élaborera pour vous un programme de traitement qui vous aidera non seulement à soulager les douleurs, mais aussi à identifier l'origine de celles-ci et à les traiter pour empêcher leur réapparition. La physiothérapie est la solution idéale pour les personnes atteintes de douleurs chroniques ou de blessures. Elle peut améliorer votre condition physique, faire disparaître vos douleurs et vous aider à retrouver la forme."
      image={
        <StaticImage
          src="../assets/images/services/traitement-douleurs/traitement-douleurs.png"
          placeholder="blurred"
          alt="Traitement Douleurs"
        />
      }
    />
    <ServiceSpec title="Exercices pour traitement de douleurs" data={spec} />
    <Section
      headline="Que Traitons-nous?"
      title="Douleur bas du dos/ haut du dos"
      description="La douleur bas du dos et la douleur haut du dos sont parmi les douleurs les plus fréquentes chez les patients.<br/>
	  Chez Super Masseur, notre physiothérapeute attaquera la source même de votre douleur au dos afin de vous procurer un traitement approprié et efficace.<br/>
	  Notre physiothérapeute renforcera votre thérapie en y intégrant des exercices de renforcement et une série d'étirements pour renforcer vos muscles centraux, ciblant ainsi le dos et toute la colonne vertébrale.<br/>
	  Cela contribuera à développer votre force musculaire et à favoriser une meilleure aisance dans vos mouvements. L'objectif est aussi de prévenir de nouvelles lésions au niveau de votre colonne vertébrale.
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
      description="Les douleurs aux épaules et au cou font naître des symptômes extrêmement inconfortables
	  et parfois même handicapants. C'est pourquoi il ne faut pas tarder à les traiter.<br/>
	  Le physiothérapeute est le spécialiste le plus qualifié pour traiter et soigner vos douleurs aux
	  épaules et au cou.<br/>
	  Le traitement des douleurs aux épaules et les douleurs cervicales devraient inclure la
	  physiothérapie manuelle. Celle-ci fait recours à des techniques destinées à minimiser la
	  raideur et les tensions.<br/>
	  Notre physiothérapeute vous fera également effectuer une série de mouvements spécifiques
	  qui auront pour effet de renforcer, de faire travailler et de raffermir les muscles et les tissus
	  de ces parties du corps.<br/>"
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
      description="Peu importe la raison de votre douleur, qu'il s'agisse d'une blessure, d'une affection ou de toute autre pathologie, elle peut affecter fortement votre état de santé. Mais grâce à notre thérapeute physique du Super Masseur, vous allez pouvoir être très vite rétabli.
	  Notre physiothérapeute conçoit pour vous un programme thérapeutique adapté pour traiter efficacement vos douleurs au poignet, au coude et à la main. Ainsi, vous serez en mesure de mener sans aucun encombre vos tâches quotidiennes.
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
      description="Que vous soyez atteint d'une grave lésion ou d'une pathologie chronique au niveau du pied ou de la cheville, vous pouvez vous laisser aider par notre cabinet de physiothérapie.<br/>
	  Notre physiothérapeute vous fera passer un examen complet pour identifier la source de votre douleur. Une fois cela fait, il vous proposera un protocole de traitement sur-mesure qui tiendra compte de vos besoins particuliers.<br/>
	  Ce traitement associe généralement un ensemble de méthodes thérapeutiques manuelles ciblées, des exercices de renforcement des muscles du pied et de la cheville ainsi que des étirements spécialisés.
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
	  Les problèmes liés aux hanches et aux genoux risquent de compliquer considérablement votre quotidien, et encore plus si vous êtes confronté aux deux.
 Super Masseur peut vous aider à traiter le problème en profondeur, et ce, de manière sûre et efficace.
 Notre physiothérapeute inspectera vos hanches et/ou vos genoux pour y déceler toute anomalie de positionnement ou tout problème structurel, avant de vous proposer un programme de physiothérapie approprié.
 Il vous proposera un ensemble de mouvements spécifiques visant à apaiser et à faire disparaître les douleurs articulaires et à renforcer les tissus de la hanche et/ou du genou fragilisés.
	  "
      image={
        <StaticImage
          src="../assets/images/services/traitement-douleurs/td-audience-5.png"
          placeholder="blurred"
          alt="Douleur Genou et Hanche"
        />
      }
    />
    <ScheduleSecton />
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
