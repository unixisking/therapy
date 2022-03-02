import React, { ReactNode } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { FreeMode, Mousewheel } from "swiper"

// import { ReactComponent as AthleteRehabSvg } from "../assets/images/services/athlete.svg"

// import { ReactComponent as PreSvg } from "../assets/images/services/pre.svg"
// import { ReactComponent as PostSvg } from "../assets/images/services/post.svg"
// import { ReactComponent as PhysioSvg } from "../assets/images/services/physio.svg"
// import { ReactComponent as MassageSvg } from "../assets/images/services/massage.svg"
// import { ReactComponent as BackboneSvg } from "../assets/images/services/backbone.svg"
import PreImg from "../assets/images/services/pre.png"
import PostImg from "../assets/images/services/post.png"
import PhysioImg from "../assets/images/services/physio.png"
import MassageImg from "../assets/images/services/pre.png"
import BackboneImg from "../assets/images/services/backbone.png"

import "swiper/css"

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
          <Card
            title="Physiotherapy"
            image={
              <img
                src={PhysioImg}
                className="h-16 w-16"
                alt="Chinese Acupuncture"
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Traitement 
			de douleur"
            image={
              <img
                src={BackboneImg}
                className="h-16 w-16 text-white"
                alt="Massage Therapy"
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Massage
			Therapy"
            image={
              <img
                src={MassageImg}
                className="h-16 w-16 text-white"
                alt="Athlete Rehabilation"
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Rééducation 
			Pré-chirurgicale "
            image={
              <img
                src={PreImg}
                className="h-16 w-16 text-white"
                alt="Deep Stretching"
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Rééducation 
			Post-chirurgicale"
            image={
              <img
                src={PostImg}
                className="h-16 w-16 text-white"
                alt="Foot Orthotics"
              />
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

interface ICard {
  title: string
  image: ReactNode
  content?: string
}

const Card = ({ title, image, content }: ICard) => (
  <div
    style={{
      background: "linear-gradient(132.39deg, #F4F4F4 2.64%, #DDE6F1 98.48%)",
    }}
    className="text-white p-2 h-56 lg:h-64 lg:py-16 lg:px-8 rounded-3xl"
  >
    <div className="flex flex-col items-center">
      <div
        style={{
          background:
            "linear-gradient(128.77deg, rgba(102, 163, 255, 0.6) -7.21%, rgba(0, 116, 255, 0.6) 106.38%)",
        }}
        className="p-3 rounded-lg"
      >
        {image}
      </div>
      <h3 className="text-primary mt-4 font-bold text-lg lg:text-xl">
        {title}
      </h3>
    </div>
    {content && <p className="mt-2 text-[#0C6784]">{content}</p>}
  </div>
)
