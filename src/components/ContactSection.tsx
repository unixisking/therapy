import {
  ClockIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
} from "@heroicons/react/outline"
import React from "react"

export default function ContactSection() {
  return (
    <div className="relative mt-12 lg:mt-24 px-4 sm:px-6 lg:max-w-7xl grid grid-col-1 lg:grid-cols-2 gap-24 mx-auto">
      <div className="space-y-12 lg:pt-36">
        <div className="flex items-center">
          <MapIcon className="w-8 h-8 mr-4 text-[#FF7F22]" />
          <p className="text-base text-grey">
            Chemin du viaduc 12, 1008 Prilly , Swisse
          </p>
        </div>
        <a
          href="tel:+41792322074"
          className="flex items-center text-base text-grey font-bold"
        >
          <PhoneIcon className="w-8 h-8 mr-4 text-[#FF7F22]" />
          <p className="text-base text-grey">+41 79 232 20 74</p>
        </a>
        <a
          href="mailto:contact@super-masseur.ch"
          className="flex items-center text-base text-grey font-bold"
        >
          <MailIcon className="w-8 h-8 mr-4 text-[#FF7F22]" />
          <p className="text-base text-grey">contact@super-masseur.ch</p>
        </a>
        <div className="flex items-center">
          <ClockIcon className="w-8 h-8 mr-4 text-[#FF7F22]" />
          <p className="text-base text-grey">
            De lundi au vendredi, de 7h à 18h
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

const ContactForm = () => {
  return (
    <form
      style={{ boxShadow: "0px 10px 40px rgba(9, 34, 124, 0.4)" }}
      className="bg-white shadow-xl py-8 px-8 mb-4 rounded-xl"
    >
      <div className="space-y-8">
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
              placeholder="John Doe"
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
              placeholder="john@example.com"
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
              id="message"
              className="shadow-sm p-4 border focus:ring-[#556AFE] focus:border-[#556AFE] block w-full sm:text-sm border-gray-300 rounded-md"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          type="submit"
          className="px-12 py-4 whitespace-nowrap border border-transparent shadow-sm text-base font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-lg drop-shadow-lg focus:outline-none focus:shadow-outline hover:scale-110 ease-in duration-300"
        >
          Envoyer
        </button>
      </div>
    </form>
  )
}
