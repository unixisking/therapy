import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Bio() {
  return (
    <section className="mt-12 lg:mt-24 bg-[#EFF1FD] w-screen">
      <div className="py-8 lg:py-24 px-6 lg:max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-8">
          À propos de Cela Ibrahim - le responsable du cabinet
        </h2>
        <p className="text-base text-grey">
          Ayant plus de 20 ans d'expérience, Cela Ibrahim a commencé sa carrière
          de physiothérapeute en 1998. En 2014, il a travaillé comme
          physiothérapeute sportif au centre sportif et physio du Luxembourg, et
          a ensuite rejoint le Centre universitaire de Liège (C.H.U.). Grâce à
          ses expériences et des formations complémentaires, il a pu se
          perfectionner dans les traitements et disciplines les plus avancées de
          la physiothérapie, notamment l'hydrothérapie, la rééducation
          orthopédique et respiratoire... Cet Ibrahim met son expertise et son
          savoir-faire au profit de ses patients, n'hésitez pas à le contacter
          au numéro <a href="tel:+41792322074">+41 79 232 20 74</a>.
        </p>
      </div>
      {/* <div className="px-12 pt-12 pb-32 lg:p-0">
        <StaticImage
          className=""
          placeholder="blurred"
          src="../assets/images/bio.png"
          alt="Our Professionals"
        />
      </div> */}
    </section>
  )
}
