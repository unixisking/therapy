import React from "react"
import Navigation from "../components/Navigation"

import HeaderImg from "../assets/images/services/reeducation-cardiaque/bg.png"
import linesImg from "../assets/images/lines.png"

import SecondaryCta from "../components/SecondaryCta"
import Footer from "../components/Footer"
import Section from "../components/Section"
import { StaticImage } from "gatsby-plugin-image"
import ScheduleSecton from "../components/ScheduleForm"
import ServiceSpec from "../components/ServiceSpec"

const spec = [
  {
    title: "Des exercices d'aérobic",
    desc: "Afin d'améliorer la circulation sanguine, et de renforcer le cœur, le physiothérapeute vous propose des exercices d'aérobic qui sont particulièrement bénéfiques pour le cœur, car ils augmentent votre rythme cardiaque.",
  },
  {
    title: "Exercices de renforcement musculaire",
    desc: "Le renforcement musculaire à un rôle important à jouer dans votre processus de traitement et de rééducation cardiaque. Les exercices de renforcement permettent de diminuer la pression exercée sur votre cœur durant vos tâches courantes de tous les jours.",
  },
  {
    title: "Les exercices d'échauffement et d'étirement",
    desc: "Il s'agit ici d'exercices dits légers que les patients souffrant de problèmes cardiaques sévères pourront effectuer ou qui serviront à préparer leur corps à fournir un effort physique plus intensif. Parmi ces activités, figurent : activités visant à stimuler le rythme cardiaque et exercices d'étirement ciblés. Le but demeure le même, à savoir accroître le rythme cardiaque.",
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
          Rééducation Cardiaque
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
      title="Rééducation Cardiaque"
      description="La rééducation cardiaque a pour but de vous aider pour vous remettre d'une crise cardiaque ou de tout autre problème cardiovasculaire. Ce programme inclut notamment des exercices physiques ainsi que des recommandations et conseils pour mener une vie plus saine.<br/>
	 Ce programme thérapeutique sur-mesure vous aide à récupérer vos forces, de stabiliser les symptômes et à empêcher l'apparition de nouveaux problèmes cardiovasculaires plus graves.<br/>
	 La rééducation cardiaque vous aidera à vous remettre sur pied et à vaincre toutes vos angoisses et vos craintes. Le programme vous préparera à adopter un mode de vie plus sain et de le maintenir pour longtemps.
	 "
      image={
        <StaticImage
          src="../assets/images/services/reeducation-cardiaque/reeducation-cardiaque.png"
          placeholder="blurred"
          alt="Rééducation Cardiaque"
        />
      }
    />
    <ServiceSpec
      title="Quels types d'exercices vous seront proposés ? "
      data={spec}
    />
    <Section
      isImageRight
      headline="À qui s'adresse la Rééducation Cardiaque ? "
      description="La rééducation cardiaque est destinée à tous les patients victimes de graves troubles cardiaques, tels qu'un infarctus du myocarde, une insuffisance cardiaque. Elle est également prescrite aux personnes qui ont subi un acte chirurgical au niveau du cœur.<br/>
	  La rééducation cardiaque s'adresse aussi aux personnes souffrant d’une arythmie et d’une angine de poitrine.
	   Les personnes ayant subi des opérations comme : un pontage cardiaque, une greffe de cœur ou de poumon, une angioplastie ou autres sont conseillés de suivre un programme de rééducation cardiaque.<br/>
	  Ce dernier a pour but de fortifier votre cœur et ainsi de vous sentir en parfaite santé."
      image={
        <StaticImage
          src="../assets/images/services/reeducation-cardiaque/audience.png"
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
