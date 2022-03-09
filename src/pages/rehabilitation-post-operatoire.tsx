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

const spec = [
  {
    title: "Les exercices après une opération de remplacement de la hanche",
    desc: "La période de récupération à la suite d'une opération de remplacement de la hanche peut être longue. Le physiothérapeute vous fera effectuer des séances de rééducation afin de renforcer la hanche et de stabiliser et maintenir votre prothèse. Parmi ces exercices, vous trouverez : l'abduction de la hanche, monter et descendre des escaliers, la marche...",
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
    desc: "Après une intervention chirurgicale sur la colonne vertébrale, le patient a besoin de séances de rééducation pour améliorer l'alignement, la balance et la coordination de son corps. Le physiothérapeute peut proposer des exercices post-chirurgie de la colonne vertébrale correspondant à la nature de la blessure et à l'intervention chirurgicale, tels que : étirement des nerfs, exercice du pont, extension des muscles du haut du corps...",
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
        <h1 className="text-4xl lg:text-6xl font-bold lg:mt-2 text-white">
          Réhabilitation post opératoire
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
      title="Réhabilitation post opératoire"
      description="Tout individu qui doit subir une opération chirurgicale à le droit de se sentir inquiet quant au déroulement de l'opération et à la durée de sa convalescence.<br/>
	  La réhabilitation post opératoire avec notre physiothérapeute est une démarche particulièrement intéressante pour le patient. En effet, en plus de soulager les douleurs des patients et de faciliter et accélérer le processus de guérison, elle aide également à prévenir les complications qui pourraient survenir après une opération."
      image={
        <StaticImage
          src="../assets/images/services/rehabilitation-post-operatoire/rehabilitation-post-operatoire.png"
          placeholder="blurred"
          alt="Réhabilitation post opératoire"
        />
      }
    />
    <ServiceSpec title="Exercices Post Opératoire" data={spec} />
    <Section
      headline="Comment la Réhabilitation post opératoire peut vous être utile ?"
      description="Toute intervention chirurgicale peut avoir des effets divers sur le corps. Par conséquent, il est extrêmement utile de suivre un programme de réhabilitation post opératoire pour garantir qu'il n'y aura pas de complications une fois l'opération effectuée. Notre physiothérapeute est là pour vous accompagner et vous aider à récupérer et à améliorer vos fonctions après la chirurgie.<br/>
	  La réhabilitation post opératoire a pour rôle de stimuler la circulation sanguine au niveau de la zone blessée afin que celle-ci cicatrise plus rapidement, et de limiter le risque de se blesser à nouveau grâce aux exercices de renforcement et de mobilité proposés dans le programme.<br/>
	  Donc, si vous êtes sur le point de vous faire opérer, n'hésitez pas à prendre contact avec notre cabinet de physiothérapie dès aujourd'hui."
      image={
        <StaticImage
          src="../assets/images/services/rehabilitation-post-operatoire/audience.png"
          placeholder="blurred"
          alt="Comment la Réhabilitation post opératoire peut vous être utile ?"
        />
      }
    />
    <ScheduleSecton />
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
