import moment from 'moment'
import { Link } from 'react-router-dom'

import { PostProps } from '@/typings'

function Post({ title, createdAt, number }: PostProps) {
  return (
    <Link to={`/post/${number}`}>
      <div className="flex flex-row justify-between items-center p-5 rounded-md shadow-md hover:shadow-lg">
        <h1 className="text-xl hover:text-gray-800 font-bold ">{title}</h1>
        <p>{moment(createdAt).fromNow()}</p>
      </div>
    </Link>
  )
}

export default Post
