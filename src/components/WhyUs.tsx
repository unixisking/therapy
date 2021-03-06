import React from "react"

import Icon1 from "../assets/icons/pathology-treatment.svg"
import Icon2 from "../assets/icons/physio-program.svg"
import Icon3 from "../assets/icons/solid-experience.svg"

const features = [
  {
    name: "Traitement et soulagement de douleurs",
    description:
      "Notre physiothérapeute est en mesure de traiter et soulager vos douleurs en appliquant les techniques de physiothérapie les plus avancées.",

    icon: Icon1,
  },
  {
    name: "Un programme de physiothérapie personnalisé",
    description:
      "Notre physiothérapeute accorde une attention particulière à chaque patient et lui propose un programme de thérapie personnalisé adapté à ses besoins.",
    icon: Icon2,
  },
  {
    name: "Une solide expérience",
    description:
      "Notre physiothérapeute a acquis une expérience considérable en la matière. Vous pourrez bénéficier de son savoir-faire afin d'améliorer votre santé et votre bien-être !",
    icon: Icon3,
  },
]

export default function WhyUs() {
  return (
    <div className="relative mt-12 lg:mt-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
            Pourquoi Nous Choisir ?
          </h2>
        </div>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map(feature => (
            <div
              style={{
                background:
                  "linear-gradient(128.77deg, rgba(102, 163, 255, 0.6) -7.21%, rgba(0, 116, 255, 0.6) 106.38%)",
              }}
              className="rounded-3xl p-5 shadow-lg"
              key={feature.name}
            >
              <dt className="flex items-center">
                <img
                  src={feature.icon}
                  className="h-24 w-24"
                  aria-hidden="true"
                />
                <p className="-mt-2 text-lg leading-6 font-medium text-white">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-white">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
