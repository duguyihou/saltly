import Background from '@cmpts/background'
import Profile from '@cmpts/profile'
import config from '@config/global'
import { useEffect } from 'react'

function Home() {
  const { user, menu } = config
  const { avatar, name, description, contact } = user
  useEffect(() => {
    document.title = 'Kong-home'
  }, [])
  return (
    <Background>
      <div className="w-72 h-96">
        <Profile
          avatar={avatar}
          title={name}
          description={description}
          contact={contact}
          menu={menu}
        />
      </div>
    </Background>
  )
}

export default Home
