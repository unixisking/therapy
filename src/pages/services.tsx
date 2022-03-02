import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/Navigation"

import WhyUs from "../components/WhyUs"
import Button from "../components/Button"
// import Layout from "../components/layout"

import HeaderImg from "../assets/images/homepage-header-img.png"
import OneImg from "../assets/images/one.png"
import TwoImg from "../assets/images/two.png"
import ThreeImg from "../assets/images/three.png"
import FourImg from "../assets/images/four.png"
import HealthImg from "../assets/images/health.png"
import linesImg from "../assets/images/lines.png"

import SecondaryCta from "../components/SecondaryCta"
import Footer from "../components/Footer"
import Section from "../components/Section"
import { StaticImage } from "gatsby-plugin-image"

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
          Services & Traitements
        </h1>
        <p className="text-base text-white mt-4">
          Notre cabinet de physiothérapie Super Masseur propose à ses patients
          un éventail de traitements couvrant un grand nombre de pathologies. En
          effet, nos services englobent plusieurs techniques de réhabilitation
          en cas de blessure, de traitement des douleurs, ainsi que tout autre
          aspect relatif à la santé et au bien-être en général.
        </p>
        <Link
          to="/"
          className="py-4 px-12 whitespace-nowrap inline-flex items-center justify-center mt-6 border border-white shadow-sm text-base font-medium text-white background-transparent  rounded-lg drop-shadow-lg focus:outline-none focus:shadow-outline hover:scale-110 ease-in duration-300"
        >
          Prenez un rendez-vous
        </Link>
      </div>
      <img
        src={linesImg}
        className="absolute hidden lg:block lg:-bottom-96 w-full"
      />
    </div>
    <Section
      title="Physiothérapie"
      description="Développez et redonnez de la force à votre corps afin que vous soyez en parfaite condition physique et que    vous puissiez mener une vie active et saine. Le    physiothérapeute peut traiter les patients en utilisant une variété de techniques, notamment les suivantes : 
"
      points={[
        "Massage/mobilisation des tissus et des articulations.",
        "Mobilisation des jointures.",
        "Mobilisation de la colonne vertébrale.",
        "Des étirements sous toutes leurs formes, ... Et bien d'autres techniques.",
      ]}
      to="/services/physiotherapie"
      image={
        <StaticImage
          src="../assets/images/who-are-we.png"
          placeholder="blurred"
          alt="Physiothérapie"
        />
      }
    />
    <Section
      isImageRight
      title="Traitement De La Douleur"
      description="Reprenez pleinement possession de votre corps, retrouver votre souplesse, mobilité et récupérer votre autonomie, tout en apaisant vos douleurs avec l'aide de notre physiothérapeute. Notre physiothérapeute peut intervenir pour traiter diverses douleurs physiques que vous éprouvez, y compris :"
      points={[
        "Douleurs de dos.",
        "Douleur au cou.",
        "Douleur de la main, du poignet et du coude.",
        "Douleur à la cheville et au pied.",
        "Douleurs de genou et de hanche ainsi que de nombreux autres maux.",
      ]}
      to="/services/traitement-de-la-douleur"
      image={
        <StaticImage
          src="../assets/images/service-images/traitement-douleur.png"
          placeholder="blurred"
          alt="Traitement De La Douleur"
        />
      }
    />
    <Section
      title="Massage"
      description="Éliminez toutes les tensions, le stress et les courbatures avec nos divers massages afin de favoriser le processus de guérison, et d’améliorer le   bien-être des patients. Cela inclut :"
      points={[
        "Massage relaxant pour apaiser et détendre le corps et l'esprit.",
        "Massage sportif pour décontracter et assouplir les muscles des sportifs et accroître leurs capacités.",
        "Massage médical pour récupérer d'une blessure ou d'une intervention chirurgicale.",
      ]}
      to=""
      image={
        <StaticImage
          src="../assets/images/service-images/massage.png"
          placeholder="blurred"
          alt="Massage"
        />
      }
    />
    <Section
      isImageRight
      title="Rééducation Sportive "
      description="Les blessures sportives peuvent toucher tout le monde. Peu importe la nature de la blessure, n'attendez pas pour consulter. Le thérapeute peut vous proposer comme traitement la physiothérapie et la rééducation. Le but ultime est de :
	  "
      points={[
        "Restaurer les fonctions musculaires",
        "Atténuer au maximum la douleur",
        "Renforcer les muscles et améliorer la flexibilité",
        "Prévenir des futures blessures.",
        "Améliorer les performances sportives.",
      ]}
      to=""
      image={
        <StaticImage
          src="../assets/images/service-images/reeducation-sportive.png"
          placeholder="blurred"
          alt="Rééducation Sportive "
        />
      }
    />
    <Section
      title="Rééducation Pré-chirurgicale"
      description="Si vous allez bientôt vous faire opérer, la rééducation pré-chirurgicale vous permettra à la fois de préparer votre corps et de raccourcir la durée de votre convalescence. Votre programme de rééducation pré-chirurgicale sera principalement centré sur les points ci-après :"
      points={[
        "Le conditionnement physique.",
        "Une série de mouvements.",
        "Proprioception pour améliorer l'équilibre.",
        "Atténuation des douleurs et des gonflements.",
        'Développer votre "mémoire musculaire" relative à certains mouvements.',
      ]}
      to=""
      image={
        <StaticImage
          src="../assets/images/service-images/reeducation-prechirurgicale.png"
          placeholder="blurred"
          alt="Rééducation Pré-chirurgicale "
        />
      }
    />
    <Section
      isImageRight
      title="Rééducation Post-chirurgicale"
      description="Vous souhaitez reprendre pied le plus rapidement possible après une intervention chirurgicale ? Avec l'aide de physiothérapeute, vous pourrez à nouveau vous adonner aux activités qui vous passionnent grâce à la rééducation post-chirurgicale ! 
	  La rééducation post-chirurgicale accompagnée d'un physiothérapeute peut aider à : 
	  "
      points={[
        "Atténuer le plus possible vos douleurs.",
        "Accélérer le processus de récupération.",
        "Minimiser d'éventuelles complications suite à une intervention chirurgicale, notamment les infections, les hémorragies, les coagulations sanguines, et d'autres problèmes susceptibles de nuire à votre santé.",
      ]}
      to=""
      image={
        <StaticImage
          src="../assets/images/service-images/reeducation-postchirurgicale.png"
          placeholder="blurred"
          alt="Rééducation Post-chirurgicale"
        />
      }
    />
    <Section
      title="Rééducation cardiaque"
      description="La rééducation cardiaque peut apporter beaucoup de bienfaits aux personnes souffrant de maladies cardiaques et ainsi reprendre une vie normale, y compris :"
      points={[
        "Améliorer la santé de votre cœur et de votre organisme en cas d'infarctus.",
        "Apaiser les symptômes liés aux pathologies cardiovasculaires.",
        "Adopter un mode de vie plus sain.",
        "Soulager son anxiété et atténuer son stress.",
        "Prévenir la survenue de pathologies et de déficiences cardiaques notamment chez les personnes âgées.",
      ]}
      to=""
      image={
        <StaticImage
          src="../assets/images/service-images/reeducation-cardiaque.png"
          placeholder="blurred"
          alt="Rééducation cardiaque"
        />
      }
    />

    <SecondaryCta />
    {/* <img
      className="w-screen"
      src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+ea3e72(6.6021,46.5281)/6.6031,46.528,14.56,0/1280x600?access_token=pk.eyJ1IjoiYnJhaGltaXNpZGFobWVkIiwiYSI6ImNrenlyZDZ2eTAzNGszZHQxNW94emh5a3UifQ.arT-fjYXk7ni-RD_NhxQ_g"
    /> */}
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
