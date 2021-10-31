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
      <Profile
        avatar={avatar}
        title={name}
        description={description}
        contact={contact}
        menu={menu}
      />
    </Background>
  )
}

export default Home
