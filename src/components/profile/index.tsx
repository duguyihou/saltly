import { GoLocation } from 'react-icons/go'

import { ProfileProps } from '@/typings'

function Profile({ avatar, title, description }: ProfileProps) {
  return (
    <div className="backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200 w-full h-full p-4 flex-col justify-start items-center shadow-lg hover:shadow-2xl cursor-pointer">
      <div className="flex justify-center items-center px-10">
        <img className="rounded-full" src={avatar} alt="avatar" />
      </div>
      <h1 className="font-bold text-3xl p-3 text-center text-white">{title}</h1>
      <div className="text-lg flex flex-row justify-center items-center text-white">
        <GoLocation />
        <div className="px-2">Sydney</div>
      </div>
      <p className="text-center text-lg text-white">{description}</p>
    </div>
  )
}

export default Profile
