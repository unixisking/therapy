import React, { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  BookmarkAltIcon,
  CalendarIcon,
  MenuIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SupportIcon,
  MailIcon,
  XIcon,
} from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
  RiNumber7,
} from "react-icons/ri"

import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const solutions = [
  {
    name: "Physiothérapie",
    description:
      "Si vous souhaitez vous sentir mieux niveau santé, plus fort et plus actif, nous sommes là pour s'occuper de vous.",
    href: "/physiotherapeute-prilly-malley",
    icon: RiNumber1,
  },
  {
    name: "Massage",
    description:
      "Si vous cherchez à améliorer votre santé physique et psychologique.",
    href: "/massage-prilly-malley",
    icon: RiNumber2,
  },
  {
    name: "Traitement douleurs",
    description:
      "Notre physiothérapeute attaquera la source même de votre douleur au dos afin de vous procurer un traitement approprié et efficace.",
    href: "/traitement-douleurs",
    icon: RiNumber3,
  },
  {
    name: "Rééducation Cardiaque",
    description:
      "La rééducation cardiaque est destinée à tous les patients victimes de graves troubles cardiaques, tels qu'un infarctus du myocarde, une insuffisance cardiaque.",
    href: "/reeducation-cardiaque",
    icon: RiNumber4,
  },
  {
    name: "Réhabilitation préopératoire",
    description:
      "un programme de réhabilitation préopératoire qui vous permet de vous préparer non seulement sur le plan physique/psychologique.",
    href: "/rehabilitation-preoperatoire",
    icon: RiNumber5,
  },
  {
    name: "Réhabilitation post opératoire",
    description:
      "Elle aide également à prévenir les complications qui pourraient survenir après une opération.",
    href: "/rehabilitation-post-operatoire",
    icon: RiNumber6,
  },
  {
    name: "Rééducation Sportive",
    description:
      "La rééducation sportive comme thérapie constitue une excellente solution pour récupérer la forme.",
    href: "/reeducation-sportive",
    icon: RiNumber7,
  },
]
const callsToAction = [
  {
    name: "Email us",
    href: "mailto:contact@edelweiss-physio.ch",
    icon: MailIcon,
  },
  { name: "+41 79 232 20 74", href: "tel:+41792322074", icon: PhoneIcon },
]
const resources = [
  {
    name: "About",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Privacy Policy",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Navigation() {
  // fixed z-20  w-screen bg-white drop-shadow-sm py-2
  const homeFormUrls = ["/a-propos", "/services", "/contact"]
  const url = typeof window !== "undefined" ? window.location.pathname : null

  return (
    <Popover className="absolute top-0 w-screen py-5 z-20">
      <div className="max-w-7xl px-4 sm:px-12 mx-auto">
        <div className="flex justify-between items-center md:justify-start md:space-x-48 mt-4 mx-auto">
          <GatsbyLink to="/" className="text-2xl lg:text-3xl text-white">
            <StaticImage
              src="../assets/images/logo-white.png"
              alt="logo"
              placeholder="blurred"
              className="hidden md:block w-56 -ml-4 h-auto"
            />
            <StaticImage
              src="../assets/images/logo.png"
              alt="logo"
              placeholder="blurred"
              className="md:hidden w-56 -ml-4 h-auto"
            />
          </GatsbyLink>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <GatsbyLink
              to="/"
              className="text-base text-white hover:font-medium"
            >
              Acceuil
            </GatsbyLink>
            <FlyoutMenu title="Services" links={solutions} />

            <GatsbyLink
              to="/a-propos"
              className="text-base text-white hover:font-medium"
            >
              A Propos
            </GatsbyLink>
            <GatsbyLink
              to="/contact"
              className="text-base text-white hover:font-medium"
            >
              Contactez-nous
            </GatsbyLink>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <GatsbyLink
              to={homeFormUrls.includes(url) ? "/#reservez" : "#reservez"}
              className="ml-24 whitespace-nowrap inline-flex items-center justify-center px-12 py-4 border border-transparent shadow-sm text-base font-medium bg-white text-primary rounded-lg drop-shadow-lg focus:outline-none outline-none focus:shadow-outline hover:scale-110 ease-in duration-300"
            >
              <span></span>Reservez
            </GatsbyLink>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="z-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <GatsbyLink
                    to="/"
                    className="text-2xl lg:text-3xl text-primary"
                  >
                    <StaticImage
                      src="../assets/images/logo.png"
                      alt="logo"
                      placeholder="blurred"
                      className="w-48 -ml-4 h-auto"
                    />
                  </GatsbyLink>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="flex flex-col space-y-4">
                <GatsbyLink
                  to="/"
                  className="text-base text-grey hover:font-medium"
                >
                  Acceuil
                </GatsbyLink>

                <GatsbyLink
                  to="/services"
                  className="text-base text-grey hover:font-medium"
                >
                  Services
                </GatsbyLink>
                <div className="flex flex-col ml-2">
                  {solutions.map(x => (
                    <GatsbyLink
                      to={x.href}
                      className="text-base text-grey hover:font-medium py-2"
                    >
                      {x.name}
                    </GatsbyLink>
                  ))}
                </div>

                <GatsbyLink
                  to="/a-propos"
                  className="text-base text-grey hover:font-medium"
                >
                  A Propos
                </GatsbyLink>
              </div>
              <div>
                <div className="w-full mx-auto flex justify-center">
                  <GatsbyLink
                    style={{ borderRadius: "4px" }}
                    to="/order"
                    className="text-center w-full mt-4 border border-transparent shadow-sm text-base font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-lg drop-shadow-lg focus:outline-none focus:shadow-outline px-12 py-4"
                  >
                    Prenez un rendez-vous
                  </GatsbyLink>
                </div>

                <p className="mt-6 text-center text-base text-gray-500">
                  N'hésitez pas à nous{" "}
                  <GatsbyLink
                    to="/contact"
                    className="text-indigo-600 hover:text-primary"
                  >
                    contacter
                  </GatsbyLink>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

const FlyoutMenu = ({ title, links }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              "text-white group te rounded-md inline-flex items-center text-base hover:text-blueish focus:outline-none"
            )}
          >
            <span>{title}</span>
            <ChevronDownIcon
              className={classNames(
                "text-white ml-2 h-5 w-5 group-hover:text-blueish"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {links.map(item => (
                    <GatsbyLink
                      key={item.name}
                      to={item.href}
                      className="-m-3 p-1 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <item.icon
                        className="mt-2 flex-shrink-0 h-6 w-6 text-blueish"
                        aria-hidden="true"
                      />
                      <div className="ml-4">
                        <p className="text-base text-gray-900">{item.name}</p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </GatsbyLink>
                  ))}
                </div>
                <div className="bg-gray-50 hover:bg-gray-100 space-y-6 sm:flex sm:space-y-0 sm:space-x-10">
                  <div className="py-3 w-full">
                    <GatsbyLink
                      to="/services"
                      className="ml-3 p-4 flex items-center rounded-md text-base text-gray-900"
                    >
                      <span className="ml-3">Consultez tous nos services</span>
                    </GatsbyLink>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
