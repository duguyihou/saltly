import { NavbarProps } from '@/typings'

function Navbar({ title }: NavbarProps) {
  return (
    <nav className="w-full  text-xl hover:text-gray-800 font-bold px-5 py-3 border-b align-middle">
      {title.toUpperCase()}
    </nav>
  )
}
export default Navbar
