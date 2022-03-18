import React from "react"
import SwiperCore, { FreeMode, Mousewheel } from "swiper"

// import { ReactComponent as AthleteRehabSvg } from "../assets/images/services/athlete.svg"

import { ReactComponent as PreSvg } from "../assets/icons/services/rehabilitation-preoperatoire.svg"
import { ReactComponent as PostSvg } from "../assets/icons/services/rehabilitation-postoperatoire.svg"
import { ReactComponent as PhysioSvg } from "../assets/icons/services/physio.svg"
import { ReactComponent as MassageSvg } from "../assets/icons/services/massotherapie.svg"
import { ReactComponent as BackboneSvg } from "../assets/icons/services/traitement-douleur.svg"
import { ReactComponent as SportiveSvg } from "../assets/icons/services/reeducation-sportive.svg"
import { ReactComponent as CardiaqueSvg } from "../assets/icons/services/reeducation-cardiaque.svg"

// import { ReactComponent as PreImg } from "../assets/icons/services/rehabilitation-preoperatoire.svg"
// import PostImg from "../assets/icons/services/rehabilitation-postoperatoire.svg"
// import { ReactComponent as PhysioImg } from "../assets/icons/services/physio.svg"
// import MassageImg from "../assets/icons/services/massotherapie.svg"
// import BackboneImg from "../assets/icons/services/traitement-douleur.svg"

import "swiper/css"
import { Link } from "gatsby"

SwiperCore.use([Mousewheel, FreeMode])

const services = [
  {
    name: "Massage",
    icon: MassageSvg,
    href: "/massage-prilly-malley",
  },
  {
    name: "Physiothérapie",
    icon: PhysioSvg,
    href: "/physiotherapeute-prilly-malley",
  },
  {
    name: "Traitement De La Douleur",
    icon: BackboneSvg,
    href: "/traitement-douleurs-prilly-malley",
  },
  {
    name: "Rééducation Sportive",
    href: "/reeducation-sportive-prilly-malley",
  },
  {
    name: "Réhabilitation préopératoire",
    icon: PreSvg,
    css: "lg:col-start-2",
    href: "/rehabilitation-preoperatoire-prilly-malley",
  },
  {
    name: "Réhabilitation postopératoire",
    icon: PostSvg,
    href: "/rehabilitation-post-operatoire-prilly-malley",
  },
  {
    name: "Rééducation cardiaque",
    css: "lg:col-start-2 md:col-span-2",
    href: "/reeducation-cardiaque-prilly-malley",
    icon: CardiaqueSvg,
  },
]

export default function Services() {
  return (
    <div className="mt-12 lg:mt-24 px-4 sm:px-6 max-w-full">
      <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-16">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
          Les Services Que Nous Proposons
        </h2>
        <p className="mt-4 text-base sm:text-lg text-grey">
          Chez Edelweiss Physio nous cherchons à améliorer la vie de nos
          patients de façon permanente. Notre physiothérapeute à Prilly a acquis
          une expertise dans différentes disciplines thérapeutiques, dont
          certaines sont uniquement disponibles dans notre cabinet. Voici un
          aperçu de nos services...
        </p>
      </div>
      <Card />
    </div>
  )
}

const Card = () => {
  return (
    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
      {services.map(s => (
        <Link
          to={s.href}
          key={s.name}
          className={`relative flex flex-col items-center space-y-4 p-4 ${
            s.css || ""
          }`}
        >
          {s.icon ? (
            <s.icon className="h-12 w-12 text-primary" aria-hidden="true" />
          ) : (
            <img
              className="h-12 w-12"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IlBhZ2UtMSI+PGcgaWQ9Il94MzBfMjQtLS1EdW1iZWxsIj48cGF0aCBpZD0iU2hhcGUiIGQ9Im0yNS42IDMwNy4yaDguNTMzdjU5LjczM2MuMDI4IDIzLjU1MiAxOS4xMTQgNDIuNjM4IDQyLjY2NyA0Mi42NjcgOS4yNjMtLjAzMSAxOC4yNTgtMy4xMDggMjUuNi04Ljc1NXY4Ljc1NWMwIDIzLjU2NCAxOS4xMDMgNDIuNjY3IDQyLjY2NyA0Mi42NjdzNDIuNjY3LTE5LjEwMyA0Mi42NjctNDIuNjY3di0xMDIuNGgxMzYuNTMzdjEwMi40YzAgMjMuNTY0IDE5LjEwMyA0Mi42NjcgNDIuNjY3IDQyLjY2N3M0Mi42NjctMTkuMTAzIDQyLjY2Ny00Mi42Njd2LTguNzU1YzcuMzQyIDUuNjQ3IDE2LjMzNyA4LjcyNCAyNS42IDguNzU1IDIzLjU1Mi0uMDI4IDQyLjYzOC0xOS4xMTQgNDIuNjY3LTQyLjY2N3YtNTkuNzMzaDguNTMzYzE0LjEzOCAwIDI1LjYtMTEuNDYyIDI1LjYtMjUuNnYtNTEuMmMwLTE0LjEzOC0xMS40NjEtMjUuNi0yNS42LTI1LjZoLTguNTMzdi01OS43MzNjLS4wMjgtMjMuNTUyLTE5LjExNC00Mi42MzgtNDIuNjY3LTQyLjY2Ny05LjI2My4wMzEtMTguMjU4IDMuMTA4LTI1LjYgOC43NTV2LTguNzU1YzAtMjMuNTY0LTE5LjEwMy00Mi42NjctNDIuNjY3LTQyLjY2N3MtNDIuNjY3IDE5LjEwMy00Mi42NjcgNDIuNjY3djEwMi40aC0xMzYuNTM0di0xMDIuNGMwLTIzLjU2NC0xOS4xMDMtNDIuNjY3LTQyLjY2Ny00Mi42NjdzLTQyLjY2NiAxOS4xMDMtNDIuNjY2IDQyLjY2N3Y4Ljc1NWMtNy4zNDItNS42NDctMTYuMzM3LTguNzI0LTI1LjYtOC43NTUtMjMuNTUyLjAyOC00Mi42MzggMTkuMTE0LTQyLjY2NyA0Mi42Njd2NTkuNzMzaC04LjUzM2MtMTQuMTM4IDAtMjUuNiAxMS40NjItMjUuNiAyNS42djUxLjJjMCAxNC4xMzggMTEuNDYyIDI1LjYgMjUuNiAyNS42em00NjAuOC04NS4zMzNjNC43MTMgMCA4LjUzMyAzLjgyMSA4LjUzMyA4LjUzM3Y1MS4yYzAgNC43MTMtMy44MiA4LjUzMy04LjUzMyA4LjUzM2gtOC41MzN2LTY4LjI2N2g4LjUzM3ptLTUxLjItMTAyLjRjMTQuMTM4IDAgMjUuNiAxMS40NjIgMjUuNiAyNS42djIyMS44NjdjMCAxNC4xMzgtMTEuNDYyIDI1LjYtMjUuNiAyNS42cy0yNS42LTExLjQ2Mi0yNS42LTI1LjZ2LTIyMS44NjdjMC0xNC4xMzkgMTEuNDYyLTI1LjYgMjUuNi0yNS42em0tOTMuODY3LTE3LjA2N2MwLTE0LjEzOCAxMS40NjItMjUuNiAyNS42LTI1LjZzMjUuNiAxMS40NjIgMjUuNiAyNS42djMwNy4yYzAgMTQuMTM4LTExLjQ2MiAyNS42LTI1LjYgMjUuNnMtMjUuNi0xMS40NjItMjUuNi0yNS42em0tMTcuMDY2IDExOS40Njd2NjguMjY3aC0xMzYuNTM0di02OC4yNjd6bS0yMDQuOC0xMTkuNDY3YzAtMTQuMTM4IDExLjQ2Mi0yNS42IDI1LjYtMjUuNnMyNS42IDExLjQ2MiAyNS42IDI1LjZ2MzA3LjJjMCAxNC4xMzgtMTEuNDYyIDI1LjYtMjUuNiAyNS42LTE0LjEzOSAwLTI1LjYtMTEuNDYyLTI1LjYtMjUuNnptLTY4LjI2NyA0Mi42NjdjMC0xNC4xMzkgMTEuNDYyLTI1LjYgMjUuNi0yNS42czI1LjYgMTEuNDYyIDI1LjYgMjUuNnYyMjEuODY3YzAgMTQuMTM4LTExLjQ2MiAyNS42LTI1LjYgMjUuNnMtMjUuNi0xMS40NjItMjUuNi0yNS42em0tMzQuMTMzIDg1LjMzM2MwLTQuNzEzIDMuODIxLTguNTMzIDguNTMzLTguNTMzaDguNTMzdjY4LjI2N2gtOC41MzNjLTQuNzEzIDAtOC41MzMtMy44Mi04LjUzMy04LjUzM3oiIGZpbGw9IiMwYzc3ZjgiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4="
            />
          )}
          <p className="text-lg text-center leading-6 font-medium text-gray-900">
            {s.name}
          </p>
        </Link>
      ))}
    </dl>
  )
}
