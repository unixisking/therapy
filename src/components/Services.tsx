import React, { ReactNode } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { FreeMode, Mousewheel } from "swiper"

// import { ReactComponent as AthleteRehabSvg } from "../assets/images/services/athlete.svg"

import { ReactComponent as PreSvg } from "../assets/icons/services/rehabilitation-preoperatoire.svg"
import { ReactComponent as PostSvg } from "../assets/icons/services/rehabilitation-postoperatoire.svg"
import { ReactComponent as PhysioSvg } from "../assets/icons/services/physio.svg"
import { ReactComponent as MassageSvg } from "../assets/icons/services/massotherapie.svg"
import { ReactComponent as BackboneSvg } from "../assets/icons/services/traitement-douleur.svg"

// import { ReactComponent as PreImg } from "../assets/icons/services/rehabilitation-preoperatoire.svg"
// import PostImg from "../assets/icons/services/rehabilitation-postoperatoire.svg"
// import { ReactComponent as PhysioImg } from "../assets/icons/services/physio.svg"
// import MassageImg from "../assets/icons/services/massotherapie.svg"
// import BackboneImg from "../assets/icons/services/traitement-douleur.svg"

import "swiper/css"
import clsx from "clsx"

SwiperCore.use([Mousewheel, FreeMode])

export default function Services() {
  return (
    <div className="mt-12 lg:mt-24 px-4 sm:px-6 max-w-full">
      <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-16">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
          Les Services Que Nous Proposons
        </h2>
        <p className="mt-4 text-base sm:text-lg text-grey">
          Chez Super Masseur Physiothérapie, nous cherchons à améliorer la vie
          de nos patients de façon permanente. Notre physiothérapeute à Prilly a
          acquis une expertise dans différentes disciplines thérapeutiques, dont
          certaines sont uniquement disponibles dans notre cabinet. Voici un
          aperçu de nos services...
        </p>
      </div>
      <Swiper
        slidesPerView="auto"
        freeMode={true}
        loop={true}
        loopedSlides={4}
        mousewheel={{ releaseOnEdges: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
            // spaceBetween: 90,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            // spaceBetween: 90,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
        }}
      >
        <SwiperSlide>
          <Card title="Physiotherapy" Image={PhysioSvg} />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Traitement 
			de douleur"
            Image={BackboneSvg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Massothérapie" Image={MassageSvg} />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Réhabilitation préopératoire" Image={PreSvg} />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Réhabilitation postopératoire" Image={PostSvg} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

interface ICard {
  title: string
  Image: any
  content?: string
}

const blue =
  "linear-gradient(128.77deg, rgba(102, 163, 255, 0.6) -7.21%, rgba(0, 116, 255, 0.6) 106.38%)"
const grey = "linear-gradient(132.39deg, #F4F4F4 2.64%, #DDE6F1 98.48%)"

const Card = ({ title, content, Image }: ICard) => {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={isHovered ? { background: blue } : { background: grey }}
      className="text-white p-2 h-56 lg:h-64 lg:py-16 lg:px-8 rounded-3xl cursor-pointer transition duration-1000 ease-in-out"
    >
      <div className="flex flex-col items-center">
        <div
          style={isHovered ? { background: grey } : { background: blue }}
          className="p-3 rounded-lg"
        >
          <Image
            className={clsx("h-16 w-16", {
              "text-primary": isHovered,
              "text-white": !isHovered,
            })}
            // alt="Chinese Acupuncture"
          />

          {/* {image} */}
        </div>
        <h3 className="text-primary mt-4 font-bold text-lg lg:text-xl">
          {title}
        </h3>
      </div>
      {content && <p className="mt-2 text-[#0C6784]">{content}</p>}
    </div>
  )
}
