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
    title: "Thérapie manuelle",
    desc: "La thérapie manuelle regroupe une série de techniques manuelles incluant notamment la mobilisation des tissus mous, des articulations et des manipulations articulaires. La thérapie manuelle atténue la douleur, optimise la mobilité et favorise les fonctions.",
  },
  {
    title: "Étirements",
    desc: "Notre physiothérapeute vous propose une série d'exercices pour améliorer la souplesse des mouvements du corps. Le physiothérapeute élabore les exercices d'étirement appropriés pour parvenir à la flexibilité souhaitée.",
  },
  {
    title: "La thermothérapie",
    desc: "Si un patient souffre de contractions musculaires à différents endroits du corps, le traitement à la chaleur ou au froid peut s'avérer efficace. Le froid réduit les douleurs, tandis que la chaleur a tendance à décontracter les muscles.",
  },
  {
    title: "Le drainage lymphatique",
    desc: "Le drainage lymphatique est un traitement effectué chez les personnes qui font de la rétention d'eau. Il a pour effet de faire évacuer le surplus de liquide accumulé dans les tissus et de stimuler la circulation sanguine.",
  },
  {
    title: "Le Kinesio taping",
    desc: "La technique du Kinesio Taping à pour effet de minimiser les gonflements et les ecchymoses. Elle permet aussi de diminuer la tension musculaire.",
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
          Physiothérapie
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
      title="Physiothérapie"
      description="La physiothérapie est un processus thérapeutique destiné à améliorer vos performances physiques après une blessure peu importe sa nature, et à vous permettre de continuer à vivre pleinement votre vie.<br/>
	  Notre physiothérapeute met à votre disposition ses compétences, son savoir-faire et ses connaissances pour non seulement faciliter la guérison rapide des blessures et éliminer les douleurs, mais aussi à empêcher le développement d'autres troubles physiques plus graves.<br/>
	  Notre kinésithérapeute est en mesure de détecter les parties du corps affectées et de concevoir un traitement sur-mesure dans le but de les améliorer au maximum.<br/>
	  Grâce aux traitements effectués en cabinet, les patients sont en mesure de renforcer les muscles et les joints, de travailler l'équilibre, la résistance et d'apaiser la douleur.
	  "
      image={
        <StaticImage
          src="../assets/images/services/physiotherapie/physiotherapie.png"
          placeholder="blurred"
          alt="Physiotherapie"
        />
      }
    />
    <ServiceSpec title="Techniques de physiothérapie" data={spec} />
    <Section
      isImageRight
      headline="À qui est destinée la physiothérapie ?"
      description="La physiothérapie est destinée à tous ceux qui, à cause de la douleur, ne parviennent pas à accomplir leurs fonctions journalières habituelles, à effectuer des mouvements ou à pratiquer des exercices sportives ou tout autre type d'activité.<br/>
	  La physiothérapie est particulièrement efficace pour les personnes qui souhaitent augmenter leur capacité fonctionnelle et qui semblent déterminées à collaborer avec notre physiothérapeute pour y parvenir.<br/>
	  Si vous souhaitez vous sentir mieux niveau santé, plus fort et plus actif, nous sommes là pour s'occuper de vous.<br/>
	   Contactez-nous dès aujourd'hui pour fixer un rendez-vous avec notre physiothérapeute. 
	  "
      image={
        <StaticImage
          src="../assets/images/services/physiotherapie/physio-audience.png"
          placeholder="blurred"
          alt="Massage"
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
