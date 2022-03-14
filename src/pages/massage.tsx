import React from "react"
import Navigation from "../components/Navigation"

// import HeaderImg from "../assets/images/homepage-header-img.png"
import HeaderImg from "../assets/images/services/massage/bg.png"
import linesImg from "../assets/images/lines.png"

import Footer from "../components/Footer"
import Section from "../components/Section"
import { StaticImage } from "gatsby-plugin-image"
import ScheduleSecton from "../components/ScheduleForm"
import ServiceSpec from "../components/ServiceSpec"
import { Link } from "gatsby"

const spec = [
  {
    title: "Pétrissage",
    desc: "Le pétrissage a un effet relaxant, décontractant et tonifiant sur les muscles, il permet également de favoriser la circulation sanguine et lymphatique. Il est appliqué notamment dans les massages sportifs en pré- et post-entraînement.",
  },
  {
    title: "Tapotement",
    desc: "Le massage par tapotement est généralement pratiqué lors des massages sportifs. Cette technique est particulièrement efficace pour favoriser la circulation sanguine et préparer le corps à l'exécution d'une activité physique intense.",
  },
  {
    title: "Effleurement",
    desc: "La technique repose sur la réalisation de doux et amples gestes circulaires sur la peau. Le but étant de dénouer la tension musculaire, mais aussi d'améliorer la circulation du sang dans le corps.",
  },
  {
    title: "La pression",
    desc: "La pression est un moyen de relaxer et de détendre certains muscles au niveau du cou/nuque, des épaules, des mains et des jambes, en libérant toute tension musculaire.",
  },
  {
    title: "Palper-rouler",
    desc: "La technique est aussi appliquée dans tout type de massages : médical, sportif et relaxant. Elle consiste à faire rouler et pétrir les muscles pour atténuer les douleurs et la fatigue musculaire.",
  },
  {
    title: "Vibration",
    desc: "La technique de vibration consiste à remuer délicatement les muscles à un rythme relativement soutenu pour simuler une vibration. Cette technique apaise et soulage les muscles.",
  },
]

const IndexPage = () => (
  <div className="relative">
    {/* <SEO title="Home" /> */}
    <div
      style={{
        background: `url(${HeaderImg}) no-repeat center center / cover`,
      }}
      className="relative h-75v lg:h-screen"
    >
      <Navigation />
      <StaticImage
        layout="fullWidth"
        placeholder="none"
        id="bg-image"
        src="../assets/images/services/massage/bg.png"
        alt=""
        className="block absolute z-10 top-0 h-screen right-0 w-screen"
      />
      <div className="absolute top-0 w-96 sm:w-auto mt-48 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
        <h1 className="text-4xl lg:text-6xl font-bold lg:mt-2 text-white uppercase">
          Massage
        </h1>
        <p className="text-base text-white mt-4">
          Notre cabinet de physiothérapie vous propose plusieurs types de
          massages qui permettent de détendre certaines parties du corps et
          facilitent également la récupération. Fixez un rendez-vous chez
          Edelweiss Physio pour découvrir quelles massages vous conviennent le
          mieux !
        </p>
        <Link
          to="#reservez"
          className="py-4 px-12 whitespace-nowrap inline-flex items-center justify-center mt-6 border border-white shadow-sm text-base font-medium text-white background-transparent  rounded-lg drop-shadow-lg focus:outline-none focus:shadow-outline hover:scale-110 ease-in duration-300"
        >
          Prenez un rendez-vous
        </Link>
      </div>
      <img
        src={linesImg}
        className="absolute hidden lg:block lg:-bottom-64 w-full"
      />
    </div>
    <div className="-mt-12 lg:-mt-24" />
    <Section
      isImageRight
      title="Massage"
      description="
      Nos physiothérapeutes pratiquent plusieurs types de massage, dont le massage relaxant, le massage sportif et le massage médical ou thérapeutique.<br/>
Nos professionnels effectuent une série de techniques manuelles sur la peau et sur les muscles afin de favoriser le bien-être des patients et d'éliminer les tensions qui peuvent survenir après un effort physique ou dans le quotidien.<br/>
Comme vos muscles sont quotidiennement sollicités, le massage vous sera particulièrement bénéfique. N'hésitez pas à nous contacter pour prendre rendez-vous.
      "
      image={
        <StaticImage
          src="../assets/images/services/massage/massage.png"
          placeholder="blurred"
          alt="Massage Thérapeutique"
        />
      }
    />
    <ServiceSpec
      title="Techniques de Massage"
      description="Nos physiothérapeutes appliquent plusieurs techniques de massage pour prendre soin de leurs patients. Parmi lesquelles on trouve les suivantes :"
      data={spec}
    />
    <Section
      headline="À Qui S'adressent Les Massages?"
      description="
      Le massage s'adresse à tous ceux qui veulent se détendre et soulager leurs muscles douloureux et contractés.
Le massage serait aussi efficace pour lutter contre le stress et les troubles de l'anxiété.
Les personnes souffrant d'insomnie peuvent recourir au massage pour mieux se détendre et améliorer leur sommeil.
Alors, si vous souhaitez améliorer votre santé physique et psychologique, il suffit de demander un rendez-vous avec l'un de nos physiothérapeutes via le formulaire ou par téléphone.
      "
      image={
        <StaticImage
          src="../assets/images/services/massage/target-audience.png"
          placeholder="blurred"
          alt="Massage"
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
