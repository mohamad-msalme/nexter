import clsx from 'clsx'
import React from 'react'

import './index.scss'
type TButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label: React.ReactNode
}
export const Button: React.FC<TButton> = ({ label, ...rest }) => (
  <button {...rest} className={clsx('btn', rest.className)}>
    {label}
  </button>
)
