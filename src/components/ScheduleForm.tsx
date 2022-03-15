import {
  ClockIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
} from "@heroicons/react/outline"
import React from "react"
import { navigate } from "gatsby"

export default function ScheduleSecton({ action }: { action: string }) {
  return (
    <div className="mx-auto mt-12 lg:mt-24 mb-8 lg:mb-24 px-4 sm:px-6 lg:max-w-7xl">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-primary text-center">
        Prenez un rendez-vous aujourd'hui
      </h2>
      <div
        id="reservez"
        className="relative mt-12 lg:mt-24 px-4 sm:px-6 lg:max-w-7xl grid grid-col-1 lg:grid-cols-2 gap-24 mx-auto"
      >
        <div className="">
          <div className="space-y-12 pr-2 border-r-2 border-gray-200 border-solid">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
              Contact Info
            </h2>

            <h3 className="text-2xl lg:text-3xl font-extrabold text-primary">
              Réservez une séance maintenant
            </h3>
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-primary mb-4">
                Nous sommes joignable par
              </h3>
              <a
                href="tel:+41792322074"
                className="flex items-center text-base text-grey font-bold"
              >
                <PhoneIcon className="w-8 h-8 mr-4 text-[#FF7F22]" />
                <p className="text-base text-grey">+41 79 232 20 74</p>
              </a>
              <a
                href="mailto:contact@edelweiss-physio.ch"
                className="flex items-center text-base text-grey font-bold"
              >
                <MailIcon className="w-8 h-8 mr-4 text-[#FF7F22]" />
                <p className="text-base text-grey">contact@super-masseur.ch</p>
              </a>
              <div className="flex items-center">
                <MapIcon className="w-8 h-8 mr-4 text-[#FF7F22]" />
                <p className="text-base text-grey">
                  Chemin du viaduc 12, 1008 Prilly , Swisse
                </p>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-8 h-8 mr-4 text-[#FF7F22]" />
                <p className="text-base text-grey">
                  De lundi au vendredi, de 7h à 18h
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-primary">
                Remboursé par l'assurance
              </h3>
              <p className="text-base text-grey">
                Nous vous rappelons que, dans la majorité des cas, la
                physiothérapie est prise en charge par votre assurance-maladie.
                En cas de doute, n'hésitez pas à nous contacter.
              </p>
            </div>
          </div>
        </div>
        <ScheduleForm action={action} />
      </div>
    </div>
  )
}

const ScheduleForm = ({ action }: { action: string }) => {
  const url = typeof window !== "undefined" ? window.location.pathname : null

  const handleSubmit = e => {
    e.preventDefault()
    const data = new FormData(e.target)
    fetch(e.target.action, {
      method: "post",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => {
        if (response.ok) {
          //redirect
          navigate("/merci")
        } else {
          console.error("form submission failed")
        }
      })
      .catch(error => {
        console.error("form submission failed", error)
      })
  }
  return (
    <div>
      <h2 className="lg:mb-12 text-3xl lg:text-4xl font-extrabold text-primary text-center">
        Prenez rendez-vous en ligne
      </h2>

      <form
        onSubmit={handleSubmit}
        method="POST"
        action={action}
        style={{ boxShadow: "0px 10px 40px rgba(9, 34, 124, 0.4)" }}
        className="bg-white shadow-xl space-y-4 py-8 px-8 mb-4 rounded-xl"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nom et prénom
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              className="py-3 px-4 block w-full shadow-sm text-gray-700 border border-solid focus:ring-[#556AFE] focus:border-[#556AFE] border-gray-300 rounded-md"
              placeholder="Doreen Gottlieb"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Numéro de téléphone
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="phone"
              id="phone"
              className="p-4 border shadow-sm focus:ring-[#556AFE] focus:border-[#556AFE] block w-full sm:text-sm text-[#] border-gray-300 rounded-md"
              placeholder="+41 79 232 20 74"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="p-4 border shadow-sm focus:ring-[#556AFE] focus:border-[#556AFE] block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="doreen@gmail.com"
            />
          </div>
        </div>
        {url === "/" ? (
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700"
            >
              Choose a service or a treatment
            </label>
            <select
              id="service"
              name="service"
              className="p-4 border mt-1 block w-full pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-[#556AFE] focus:border-[#556AFE] sm:text-sm rounded-md"
            >
              <option disabled selected defaultChecked>
                -
              </option>
              <option>Massothérapie</option>
              <option>Physiothérapie</option>
              <option>Traitement de Douleurs</option>
              <option>Rééducation Sportive</option>
              <option>Réhabilitation Préopératoire</option>
              <option>Réhabilitation Post opératoire</option>
              <option>Rééducation Cardiaque</option>
            </select>
          </div>
        ) : null}
        <div>
          <label
            htmlFor="session_date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <div className="mt-1">
            <input
              type="datetime-local"
              name="session_date"
              id="session_date"
              className="p-4 border shadow-sm focus:ring-[#556AFE] focus:border-[#556AFE] block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name="message"
              placeholder="Optionnel"
              id="message"
              className="shadow-sm p-4 border focus:ring-[#556AFE] focus:border-[#556AFE] block w-full sm:text-sm border-gray-300 rounded-md"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-12 py-4 whitespace-nowrap border border-transparent shadow-sm text-base font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-lg drop-shadow-lg focus:outline-none focus:shadow-outline hover:scale-110 ease-in duration-300"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  )
}
