import React from "react"
import Navigation from "../components/Navigation"

// import HeaderImg from "../assets/images/homepage-header-img.png"
import HeaderImg from "../assets/images/services/massage/bg.png"
import linesImg from "../assets/images/lines.png"

import SecondaryCta from "../components/SecondaryCta"
import Footer from "../components/Footer"
import Section from "../components/Section"
import { StaticImage } from "gatsby-plugin-image"
import ScheduleSecton from "../components/ScheduleForm"
import ServiceSpec from "../components/ServiceSpec"

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
      <div className="absolute top-0 w-96 sm:w-auto mt-64 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
        <h1 className="text-4xl lg:text-6xl font-bold lg:mt-2 text-white">
          Massothérapie
        </h1>
      </div>
      <img
        src={linesImg}
        className="absolute hidden lg:block lg:-bottom-64 w-full"
      />
    </div>
    <div className="-mt-12 lg:-mt-24" />
    <Section
      isImageRight
      title="Massage Thérapeutique"
      description="
      Vos tissus mous et vos muscles sont très sollicités quotidiennement. Par conséquent, il est primordial de les maintenir en bonne santé et de veiller à leur bon fonctionnement. C'est pourquoi le massage est particulièrement bénéfique.<br/>
Le massage, ou massothérapie, consiste à entreprendre une série de techniques manuelles profondes sur la peau et les muscles dans le but de favoriser le bien-être des patients et d'éliminer les tensions pouvant survenir après un effort physique ou dans la vie de tous les jours.<br/>
Notre physiothérapeute vous propose différents types de massages, parmi lesquels figurent le massage relaxant, le massage sportif et le massage médical.
"
      image={
        <StaticImage
          src="../assets/images/services/massage/massage.png"
          placeholder="blurred"
          alt="Massage Thérapeutique"
        />
      }
    />
    <ServiceSpec title="Techniques de Massothérapie" data={spec} />
    <Section
      headline="À Qui S'adressent Les Services De Massage?"
      description="Les massages sont destinés à tout le monde, étant donné que c'est une solution très efficace pour soulager les muscles endoloris, contractés ou crispés.
Les massages peuvent vous être très bénéfiques si vous êtes atteints de douleurs musculaires ou si vous souhaitez améliorer votre bien-être physique et mental.<br/>
De plus, selon des études menées, le massage est efficace pour combattre le stress et les troubles de l'anxiété. Il vous aide à vous relaxer et à avoir un meilleur sommeil.<br/>
Si vous cherchez à améliorer votre santé physique et psychologique, vous n'avez qu'à demander un rendez-vous via le formulaire à nous contacter par téléphone.

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
