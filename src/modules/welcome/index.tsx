import Background from '@cmpts/background'
import Profile from '@cmpts/profile'
import config from '@config/global'
import { useEffect } from 'react'

function Welcome() {
  const { user } = config
  const { avatar, name, description } = user
  useEffect(() => {
    document.title = 'Kong'
  }, [])
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Background />
      <div className="w-72 h-96 ">
        <Profile avatar={avatar} title={name} description={description} />
      </div>
    </div>
  )
}

export default Welcome
