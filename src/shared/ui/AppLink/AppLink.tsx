import { type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import cls from './AppLink.module.scss'

import { classNames } from '../../lib/classNames/classNames'

export interface AppLinkProps extends LinkProps {
  children: ReactNode
  className?: string
}

export default function AppLink (props: AppLinkProps) {
  const {
    to,
    children,
    className,
    ...otherProps
  } = props

  return (
    <Link to={to} className={classNames(cls.appLink, {}, [className ?? ''])} {...otherProps}>
      {children}
    </Link>
  )
}
