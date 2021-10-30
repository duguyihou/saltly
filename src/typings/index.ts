import { ReactNode } from 'react'
import { IconType } from 'react-icons'

export interface BackgroundProps {
  children: ReactNode
}

export interface ProfileProps {
  avatar: string
  title: string
  description: string
  menu: Array<{ name: string; href: string }>
  contact: Array<{ icon: IconType; href: string }>
}
