import React, { PropsWithChildren } from 'react'

export const LinkApplicationButton = (props:PropsWithChildren<ApplicationButtonType>) => {
  return (
    <a className={`btn btn-app `+props.classes}>
        {props.children}
    </a>
  )
}