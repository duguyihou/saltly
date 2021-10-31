import Profile from '@cmpts/profile'
import config from '@config/global'
import { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  const { user, menu } = config
  const { avatar, name, description, contact } = user
  return (
    <div className="w-screen h-screen flex flex-row justify-start items-center">
      <Profile
        avatar={avatar}
        title={name}
        description={description}
        contact={contact}
        menu={menu}
      />
      <section>{children}</section>
    </div>
  )
}

export default Layout
