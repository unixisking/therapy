import { StaticImage } from "gatsby-plugin-image"
import React, { ReactNode } from "react"

import Button from "./Button"

interface ISection {
  headline?: string
  title?: string
  description: string
  points?: string[]
  to?: string
  isImageRight?: boolean
  image: ReactNode
}

export default function Section(props: ISection) {
  return (
    <div className="relative mt-12 lg:mt-24">
      {props.isImageRight === true ? (
        <section className="lg:max-w-7xl px-4 lg:px-6 mx-auto">
          {props.headline && (
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary text-center lg:mb-8">
              {props.headline}
            </h2>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
            <div className="hidden lg:block -mt-8">{props.image}</div>
            <div className="mx-auto space-y-8">
              {props.title && (
                <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
                  {props.title}
                </h2>
              )}
              <div className="w-96 lg:hidden mx-auto">{props.image}</div>
              <p
                dangerouslySetInnerHTML={{ __html: props.description }}
                className="text-base text-grey"
              />

              {props.points && (
                <ul className="mt-4 list-disc pl-4 space-y-4 marker:text-2xl marker:text-[#FF7F22]">
                  {props.points.map((point, index) => (
                    <li key={index} className="text-base text-grey">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {props.to && (
                <Button to={props.to} size="large">
                  En savoir plus
                </Button>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="lg:max-w-7xl px-4 lg:px-6 mx-auto">
          {props.headline && (
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mx-auto text-center lg:mb-8">
              {props.headline}
            </h2>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
            <div className="mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
                {props.title}
              </h2>
              <div className="w-96 lg:hidden mx-auto">{props.image}</div>
              <p
                dangerouslySetInnerHTML={{ __html: props.description }}
                className="text-base text-grey"
              />

              {props.points && (
                <ul className="mt-4 list-disc pl-4 space-y-4 marker:text-2xl marker:text-[#FF7F22]">
                  {props.points.map((point, index) => (
                    <li key={index} className="text-base text-grey">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {props.to && (
                <Button to={props.to} size="large">
                  En savoir plus
                </Button>
              )}
            </div>
            <div className="hidden lg:block -mt-8">{props.image}</div>
          </div>
        </section>
      )}
    </div>
  )
}
