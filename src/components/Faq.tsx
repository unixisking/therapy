import React from "react"
import { Link } from "gatsby"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon, MinusIcon, PlusIcon } from "@heroicons/react/outline"

const faqs = [
  {
    question: "Dans quels cas faut-il avoir recours à la physiothérapie ?",
    answer:
      "La physiothérapie peut traiter un grand nombre de problèmes, y compris :",
    points: [
      "Les problèmes en rapport avec les mauvaises postures",
      "Les douleurs musculaires et articulaires.",
      "Des blessures suite à des accidents routiers, sportives et de travail.",
      "Les blessures suite à des fractures ou des déchirures.",
      "Les douleurs dorsales, cervicales et les céphalées.",
    ],
  },
  {
    question: "Est-ce que la physiothérapie peut être douloureuse ?",
    answer:
      "La physiothérapie a pour but de faire disparaître les douleurs. Cependant, il arrive que vous soyez légèrement courbaturé à la suite du traitement effectué sur les muscles fragilisés ou en cours de récupération. Ne vous inquiétez pas, notre physiothérapeute sera très vigilant lors de votre séance, afin que vous puissiez vous sentir confortable et en confiance.",
  },
  {
    question:
      "À quoi ressemble le premier rendez-vous avec votre physiothérapeute ?",
    answer:
      "Dans un premier temps, le physiothérapeute vous posera quelques questions pour évaluer votre état de santé et identifier vos besoins.<br/>Puis, le physiothérapeute procède à une évaluation physique dans le but de définir la cause de vos douleurs.<br/>Après avoir évalué votre cas, il mettra en place un programme thérapeutique personnalisé.",
  },
  {
    question:
      "Quels sont les différents outils qu'un physiothérapeute emploie pour ses interventions ?",
    answer:
      "Afin de traiter ses patients, le physiothérapeute peut avoir recours aux moyens suivants :",
    points: [
      "La thérapie manuelle. Cela consiste à procéder à des mobilisations articulaires, à des massages de tout type.",
      "Des exercices de rééducation tels que le renforcement musculaire, les exercices pour améliorer la flexibilité et la posture.",
      "L’électrothérapie,... Etc.",
    ],
  },
  {
    question:
      "Je dois faire combien de séances pour obtenir des résultats satisfaisants ?",
    answer:
      "Le nombre de séances peut varier d'une personne à l'autre et d'un problème à l'autre. Après le premier rendez-vous, le physiothérapeute saura vous dire combien de temps dureront vos séances et à quelle fréquence celles-ci se dérouleront.<br/>Si vous trouvez que votre état ne s'est pas amélioré après plusieurs séances, parlez-en à votre physiothérapeute.",
  },
  {
    question:
      "Votre physiothérapeute a- t-il suffisamment d'expérience pour pouvoir traiter mon problème ?",
    answer:
      "Notre physiothérapeute est titulaire d'un diplôme de physiothérapie certifié. Ses 30 années d'expérience en physiothérapie lui ont permis de devenir une référence dans ce domaine.<br/>Rassurez-vous, votre physiothérapeute est bien qualifié et expérimenté pour examiner et prendre en charge votre cas.",
  },
  {
    question:
      "Est-ce que mon assurance remboursera ou prendra en charge ma physiothérapie ?",
    answer:
      "Oui, certainement. De nombreuses compagnies d'assurance prennent en charge les traitements de physiothérapie. Renseignez-vous auprès de votre assureur ou contactez notre cabinet pour vérifier si les soins de physiothérapie sont couverts par votre assurance.",
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Faq() {
  return (
    <div id="faq" className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-grey sm:text-4xl">
            Questions fréquemment posées
          </h2>
          <dl className="mt-12 space-y-6">
            {faqs.map(faq => (
              <Disclosure
                as="div"
                key={faq.question}
                className="py-6 px-4 border border-solid border-[#B1B1F8] rounded-md"
              >
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span
                          className={classNames(
                            "text-lg",
                            open ? "text-[#FF7F22]" : "text-grey"
                          )}
                        >
                          {faq.question}
                        </span>
                        <span
                          className={classNames(
                            "ml-6 h-7 flex items-center",
                            open ? "text-[#FF7F22]" : "text-gray-400"
                          )}
                        >
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-4 pr-12">
                      <p
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                        className="text-base text-grey"
                      />
                      {faq.points && (
                        <ul className="mt-4 list-disc marker:text-2xl marker:text-[#FF7F22] pl-6">
                          {faq.points.map(point => (
                            <li key={point} className="text-base text-grey">
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>

        <div className="mt-8 lg:mt-16 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-center text-3xl text-grey sm:text-3xl">
            Vous avez encore une question ?
          </h2>
          <p className="text-center text-lg text-grey">
            Si la réponse à votre question ne se trouve pas dans notre FAQ, nous
            vous invitons à nous{" "}
            <Link to="/contact" className="font-bold">
              contacter
            </Link>
            . Nous vous ferons parvenir une réponse très rapidement.
          </p>
        </div>
      </div>
    </div>
  )
}
