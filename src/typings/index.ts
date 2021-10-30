import { ReactNode } from 'react'

export interface BackgroundProps {
  children: ReactNode
}

export interface ProfileProps {
  avatar: string
  title: string
  description: string
  menu: Array<{ name: string; href: string }>
  contact: Array<{ icon: string; href: string }>
}
