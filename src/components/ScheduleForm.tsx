import React from "react"

export default function ScheduleSecton() {
  return (
    <div className="relative mt-12 lg:mt-24 px-4 sm:px-6 lg:max-w-7xl grid grid-col-1 lg:grid-cols-2 gap-24 mx-auto">
      <div className="space-y-12 lg:pt-24">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
          Réservez Une Séance Maintenant
        </h2>
        <div className="space-y-4">
          <h3 className="text-2xl lg:text-3xl font-extrabold text-primary mb-4">
            Disponible par téléphone
          </h3>
          <a href="tel:6565" className="text-base text-grey font-bold">
            0711 – 99 76 37 00
          </a>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl lg:text-3xl font-extrabold text-primary">
            Veuillez noter que
          </h3>
          <p className="text-base text-grey">
            En raison du nombre limité de participants, il est nécessaire de
            s'inscrire à l'avance, même pour le cours d'essai.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl lg:text-3xl font-extrabold text-primary">
            Veuillez apporter avec vous
          </h3>
          <p className="text-base text-grey">
            Une couverture ou une serviette et des vêtements chauds et
            confortables (chaussettes en laine) .
          </p>
        </div>
      </div>
      <ScheduleForm />
    </div>
  )
}

const ScheduleForm = () => {
  return (
    <form
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
            placeholder="0711 – 99 76 37 00"
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
          htmlFor="service"
          className="block text-sm font-medium text-gray-700"
        >
          Choose a service or a treatment
        </label>
        <select
          id="service"
          name="service"
          className="p-4 border mt-1 block w-full pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-[#556AFE] focus:border-[#556AFE] sm:text-sm rounded-md"
          defaultValue="Massage"
        >
          <option defaultChecked>Massage</option>
          <option>Physiothérapie</option>
          <option>Traitement De La Douleur</option>
          <option>Rééducation Sportive </option>
          <option>Rééducation Pré-chirurgicale </option>
          <option>Rééducation Post-chirurgicale</option>
          <option>Rééducation cardiaque</option>
        </select>
      </div>
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
  )
}
