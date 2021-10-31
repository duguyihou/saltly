import { ReactNode } from 'react'

export interface BackgroundProps {
  children: ReactNode
}

export interface ProfileProps {
  avatar: string
  title: string
  description: string
}

export interface PostProps {
  title: string
  createdAt: string
}

export interface FeedProps {
  posts: PostProps[]
}
