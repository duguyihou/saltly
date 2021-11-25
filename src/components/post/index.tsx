import moment from 'moment'
import { Link } from 'react-router-dom'

import { PostProps } from '@/typings'

import styles from './styles.module.css'

function Post({ title, createdAt, number }: PostProps) {
  return (
    <Link to={`/post/${number}`}>
      <div className={styles.item}>
        <h1 className={styles.title}>{title}</h1>
        <p>{moment(createdAt).fromNow()}</p>
      </div>
    </Link>
  )
}

export default Post
