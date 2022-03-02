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
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri"

import Logo from "../assets/images/logo.png"
import { Link as GatsbyLink } from "gatsby"
import Button from "./Button"

const solutions = [
  {
    name: "MERCURIUS BRB-seq kit",
    description: "Brb-seq kit (96 samples)",
    href: "/mercurius-brb-seq-kit",
    icon: RiNumber1,
  },
  {
    name: "MERCURIUS Blood BRB-seq kit",
    description: "Blood brb-seq kit (96 samples)",
    href: "/mercurius-blood-brb-seq-kit",
    icon: RiNumber2,
  },
  {
    name: "MERCURIUS   BRB-seq service",
    description: "BRB-SEQ TRANSCRIPTOMICS SERVICE",
    href: "/mercurius-brb-seq-service",
    icon: RiNumber3,
  },
]
const callsToAction = [
  {
    name: "Email us",
    href: "mailto:info@alitheagenomics.com",
    icon: MailIcon,
  },
  { name: "+41 788 30 31 39", href: "tel:+41788303139", icon: PhoneIcon },
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

export default function Navigation() {
  // fixed z-20  w-screen bg-white drop-shadow-sm py-2
  return (
    <Popover className="absolute top-0 w-screen py-5 z-20">
      <div className="max-w-7xl px-4 sm:px-12">
        <div className="flex justify-between items-center md:justify-start md:space-x-48 mt-4 mx-4">
          <GatsbyLink to="/" className="text-2xl lg:text-3xl text-white">
            Executive <br />
            physiotherapy
          </GatsbyLink>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <GatsbyLink
              to="/"
              className="text-base text-white hover:font-medium"
            >
              Acceuil
            </GatsbyLink>

            <GatsbyLink
              to="/services"
              className="text-base text-white hover:font-medium"
            >
              Services
            </GatsbyLink>

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
          </nav>
          {/*}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <GatsbyLink
              to="/order"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-primary to-greenish rounded-lg drop-shadow-lg focus:outline-none focus:shadow-outline"
            >
              Order now
            </GatsbyLink>
          </div>
          */}
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
                    Executive physiotherapy
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
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
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

                <GatsbyLink
                  to="/a-propos"
                  className="text-base text-grey hover:font-medium"
                >
                  A Propos
                </GatsbyLink>
                <GatsbyLink
                  to="/contact"
                  className="text-base text-grey hover:font-medium"
                >
                  Contactez-nous
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
                  Feel free to{" "}
                  <GatsbyLink
                    to="/contact"
                    className="text-indigo-600 hover:text-primary"
                  >
                    contact us here
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
