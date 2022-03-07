import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Bio() {
  return (
    <section className="mt-12 lg:mt-24 bg-[#EFF1FD] w-screen">
      <div className="py-8 lg:py-24 px-6 lg:max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-8">
          En savoir plus sur Cela Ibrahim - le proprio et physiothérapeute de
          Super Masseur
        </h2>
        <p className="text-base text-grey">
          en 1998. , Cela Ibrahim a commencé sa carrière en tant que
          physiothérapeute. En 2014, il a exercé en tant que physiothérapeute
          sportif dans un centre sportif et physio à Luxembourg. Il y assurait
          les services de rééducation et réentrainement à l'effort.
          <br /> Il a aussi occupé le rôle de responsable de la rééducation
          cardio-pulmonaire dans un établissement hospitalier. Il a notamment
          acquis des connaissances approfondies sur la pratique de la méthode de
          l'École du Dos.
          <br /> Il a par ailleurs travaillé au Centre Universitaire de Liège
          (C.H.U) où il a pu se perfectionner dans les domaines de
          l'hydrothérapie, de la rééducation orthopédique et neurologique, de la
          traumatologie, de la rééducation des troubles Musculo-Squelettiques.
          <br />
          Il a aussi effectué plusieurs formations supplémentaires notamment
          dans l'électrothérapie, le trigger point, l'échographie humaine, la
          physio respiratoire, et traitement par ondes de choc. Il a par
          ailleurs bénéficié d'une formation interne C.H.U. portant sur la
          thérapie manuelle et notamment l'ostéopathie. Aujourd'hui, Cela
          Ibrahim est désormais propriétaire de son propre cabinet de
          physiothérapie à Prilly, dont il est le physiothérapeute principal.
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
