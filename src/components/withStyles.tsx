import React from "react"
import { Link as GatsbyLink } from "gatsby"

export const withHoverEffect = (Component: any) => {
  const hoverEffect = "hover:scale-110 ease-in duration-300"
  return (props: any) => (
    <Component {...props} className={`${props.className} ${hoverEffect}`} />
  )
}

export const Link = withHoverEffect(GatsbyLink)
