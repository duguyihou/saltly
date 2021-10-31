import Profile from '@cmpts/profile'
import config from '@config/global'
import { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  const { user } = config
  const { avatar, name, description } = user
  return (
    <div className="w-screen h-screen flex flex-row justify-start items-center">
      <div className="flex justify-center items-center w-1/5 h-full bg-gray-500 px-10">
        <Profile avatar={avatar} title={name} description={description} />
      </div>
      <section>{children}</section>
    </div>
  )
}

export default Layout
