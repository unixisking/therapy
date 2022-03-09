import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import BlueBgImg from "../assets/images/blue-bg.png"
import BlueBgImg2 from "../assets/images/services/physiotherapie/physio-spec-image.png"

interface IServiceSpec {
  title: string
  data: { title: string; desc: string }[]
  description?: string
  // withImage?: boolean
}

export default function (props: IServiceSpec) {
  // if (props.withImage) {
  //   return (
  //     <div className="relative mt-12 lg:mt-24">
  //       <img
  //         className="absolute top-0 right-0 w-screen h-full object-cover"
  //         src={BlueBgImg2}
  //         alt=""
  //       />
  //       <div className="relative lg:max-w-7xl mx-auto px-4 lg:px-6 pt-48 pb-96 lg:pt-32 lg:pb-56 grid grid-cols-1 lg:grid-cols-2 ">
  //         <div>
  //           <h2 className="relative text-3xl lg:text-4xl font-extrabold text-white mb-8">
  //             {props.title}
  //           </h2>
  //           <div className="relative grid cols-1 gap-12">
  //             {props.data.map((item, index) => (
  //               <div key={item.title} className="space-y-2">
  //                 <h3 className="text-white text-2xl lg:text-3xl font-extralight">
  //                   {item.title}
  //                 </h3>
  //                 <p className="text-base text-white">{item.desc}</p>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <div className="relative mt-12 lg:mt-24">
      <img
        className="absolute top-0 left-0 w-screen h-full object-cover"
        src={BlueBgImg}
        alt=""
      />
      <div className="relative lg:max-w-7xl mx-auto px-4 lg:px-6 pt-48 pb-96 lg:pt-32 lg:pb-56">
        <h2 className="relative text-3xl lg:text-4xl font-extrabold text-white mb-8">
          {props.title}
        </h2>
        {props.description && (
          <p className="my-3 text-white">{props.description}</p>
        )}
        <div className="relative grid cols-1 sm:grid-cols-2 gap-12">
          {props.data.map((item, index) => (
            <div key={item.title} className="space-y-2">
              <h3 className="text-white text-2xl lg:text-3xl font-extralight">
                {item.title}
              </h3>
              <p className="text-base text-white">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
