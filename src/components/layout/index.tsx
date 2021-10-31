import Profile from '@cmpts/profile'
import { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* <Profile /> */}
      <section>{children}</section>
    </div>
  )
}

export default Layout
