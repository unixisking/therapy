import { Link } from "gatsby"
import React from "react"

import BackgroundImg from "../assets/images/cta-bg.png"

function SecondaryCta() {
  return (
    <div className="relative mt-12 h-screen w-screen lg:mt-24">
      <img
        className="absolute h-screen top-0 left-0 right-0 w-screen object-cover object-center"
        src={BackgroundImg}
        alt="Background"
      />
      <div className="relative max-w-3xl space-y-10 top-32 m-auto text-center z-10">
        <h1 className="text-white text-4xl lg:text-5xl">
          Disponible Par Telephone
          <br />
          <br />{" "}
          <a href="tel:" className="text-white">
            0711 – 99 76 37 00
          </a>
        </h1>
        <p className="text-base text-white">
          De lundi au vendredi, de 7h à 18h
          <br />
          <br />
          En dehors de ces horaires, merci de parler sur l'AB ou d'Envoyez-nous
          une demande via le formulaire et nous vous rappellerons gratuitement.
        </p>
        <Link
          to="/"
          className="py-4 px-12 whitespace-nowrap inline-flex items-center justify-center mt-4 border border-white shadow-sm text-base font-medium text-white background-transparent  rounded-lg drop-shadow-lg focus:outline-none focus:shadow-outline hover:scale-110 ease-in duration-300"
        >
          Prenez un rendez-vous
        </Link>
      </div>
    </div>
  )
}

export default SecondaryCta
