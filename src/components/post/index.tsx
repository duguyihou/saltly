import { PostProps } from '@/typings'

function Post({ title, createdAt }: PostProps) {
  return (
    <div className="flex flex-row justify-start items-center p-5">
      <h1 className="text-xl hover:text-gray-800 ">{title}</h1>
      <p>{createdAt}</p>
    </div>
  )
}

export default Post
