import { Link } from 'react-router-dom'

import { ProfileProps } from '@/typings'

function Profile({ avatar, title, description, menu, contact }: ProfileProps) {
  return (
    <div className="bg-white w-72 h-auto p-4 rounded-md flex-col justify-start items-center">
      <div className="flex justify-center items-center w-full h-auto">
        <img className="w-56 h-56 rounded-full" src={avatar} alt="avatar" />
      </div>
      <h1 className="font-bold text-3xl p-3 text-center">{title}</h1>
      <p className="text-center text-lg">{description}</p>
      <nav className="flex flex-row justify-around items-center w-full py-2">
        {menu.map(({ name, href }) => (
          <Link key={name} to={href}>
            {name}
          </Link>
        ))}
      </nav>
      <div>
        {contact.map(({ icon, href }) => (
          <a key={href} href={href}>
            {icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Profile
