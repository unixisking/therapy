import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Bio() {
  return (
    <section className="mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 lg:gap-24 bg-[#EFF1FD] w-screen">
      <div className="col-span-2 pt-32 px-12 lg:max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-8">
          Our Professionals
        </h2>
        <p className="text-base text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="px-12 pt-12 pb-32 lg:p-0">
        <StaticImage
          className=""
          placeholder="blurred"
          src="../assets/images/bio.png"
          alt="Our Professionals"
        />
      </div>
    </section>
  )
}
