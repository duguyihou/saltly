import { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center">
      <section className="flex flex-col justify-start items-center w-1/2 h-full">
        {children}
      </section>
    </div>
  )
}

export default Layout
