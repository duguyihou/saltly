import Background from '@cmpts/background'
import Profile from '@cmpts/profile'
import config from '@config/global'
import styles from '@styles/welcome.module.css'
import { useEffect } from 'react'

function Welcome() {
  const { user } = config
  const { avatar, name, description } = user
  useEffect(() => {
    document.title = 'Kong'
  }, [])
  return (
    <div className={styles.page}>
      <Background />
      <div className={styles.card}>
        <Profile avatar={avatar} title={name} description={description} />
      </div>
    </div>
  )
}

export default Welcome
