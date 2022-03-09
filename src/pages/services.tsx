import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/Navigation"

import HeaderImg from "../assets/images/homepage-header-img.png"

import linesImg from "../assets/images/lines.png"

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
          THÉRAPIES & Traitements
        </h1>
        <p className="text-base text-white mt-4">
          Notre cabinet de physiothérapie Edelweiss Physio propose à ses
          patients un éventail de traitements couvrant un grand nombre de
          pathologies. En effet, nos services englobent plusieurs techniques de
          réhabilitation en cas de blessure, de traitement des douleurs, ainsi
          que tout autre aspect relatif à la santé et au bien-être en général.
        </p>
        <Link
          to="/#reservez"
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
      description="Nos physiothérapeutes vous aident à développer et renforcer votre corps afin de retrouver votre condition physique d'avant ou de l'améliorer. Pour traiter vos pathologies, nos physiothérapeutes utilisent une variété de techniques, parmi lesquelles les suivantes :"
      points={[
        "Thérapie manuelle.",
        "Trigger point.",
        "L'électrothérapie.",
        "Des étirements sous toutes leurs formes, ... Et bien d'autres techniques.",
      ]}
      to="/services/physiotherapie"
      image={
        <StaticImage
          src="../assets/images/service-images/physio.png"
          placeholder="blurred"
          alt="Physiothérapie"
        />
      }
    />
    <Section
      isImageRight
      title="Traitement de Douleurs"
      description="Notre équipe de physiothérapeutes vous aidera à reprendre pleinement contrôle de votre corps. Retrouvez votre souplesse, votre mobilité et votre autonomie tout en soulageant vos douleurs. 
      Nos physiothérapeutes peuvent intervenir pour traiter diverses douleurs physiques, parmi lesquelles les suivantes:"
      points={[
        "Douleur Bas du Dos/ Haut du Dos",
        "Douleur epaule et cou",
        "Douleur poignet, coude et main",
        "Douleur pied et cheville",
        "Douleur Genou et Hanche ainsi que de nombreux autres maux.",
      ]}
      to="/services/traitement-de-la-douleur"
      image={
        <StaticImage
          src="../assets/images/service-images/traitement-douleur.png"
          placeholder="blurred"
          alt="Traitement de Douleurs"
        />
      }
    />
    <Section
      title="Massage"
      description="Nos physiothérapeutes utilisent des huiles essentielles et diverses techniques de massage pour vous aider à éliminer toutes les tensions, le stress et les douleurs. Nous vous proposons différents types de massages, parmi lesquels vous trouverez :"
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
          alt="Massothérapie"
        />
      }
    />
    <Section
      isImageRight
      title="Rééducation Sportive"
      description="Les blessures sportives peuvent toucher n'importe qui. Quelle que soit la nature de la blessure, nos thérapeutes peuvent vous proposer la rééducation sportive comme traitement qui a pour but de :"
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
          alt="Rééducation Sportive"
        />
      }
    />
    <Section
      title="Réhabilitation Préopératoire"
      description="Vous allez bientôt subir une intervention chirurgicale ? Notre équipe vous aidera à préparer votre corps à l'opération et vous aidera à accélérer votre période de récupération. Nos programmes seront axés sur les points ci-dessus: "
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
          alt="Réhabilitation Préopératoire"
        />
      }
    />
    <Section
      isImageRight
      title="Réhabilitation Post opératoire"
      description="
      Vous souhaitez vous remettre rapidement sur pied après votre opération et reprendre vos activités habituelles ? Nos physiothérapeutes peuvent vous aider à :
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
          alt="Réhabilitation Post opératoire"
        />
      }
    />
    <Section
      title="Rééducation Cardiaque"
      description="Nos physiothérapeutes peuvent vous aider, grâce à la rééducation cardiaque, à:"
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
          alt="Rééducation Cardiaque"
        />
      }
    />

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
