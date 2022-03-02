import React from "react"
import clsx from "clsx"
import { Link } from "gatsby"

const sizes: Record<string, string> = {
  small: "px-4 py-2",
  medium: "px-8 py-3",
  large: "px-12 py-4",
}

interface IButton {
  children?: React.ReactNode
  size?: string
  animate?: string
  to?: string
  href?: string
}

export default function Button({ children, size, animate, ...props }: IButton) {
  let buttonSize = size ? sizes[size] : sizes.large
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={clsx(
          "whitespace-nowrap inline-flex items-center justify-center mt-4 border border-transparent shadow-sm text-base font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-lg drop-shadow-lg focus:outline-none focus:shadow-outline hover:scale-110 ease-in duration-300",
          buttonSize
        )}
        {...props}
      >
        {children}
      </Link>
    )
  } else if (props.href) {
    return (
      <a
        href={props.href}
        className={clsx(
          "whitespace-nowrap inline-flex items-center justify-center mt-4 border border-transparent shadow-sm text-base font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-lg drop-shadow-lg focus:outline-none focus:shadow-outline",
          buttonSize
        )}
        {...props}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={clsx(
          "whitespace-nowrap inline-flex items-center justify-center mt-4 border border-transparent shadow-sm text-base font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-lg drop-shadow-lg focus:outline-none focus:shadow-outline",
          buttonSize
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
}
