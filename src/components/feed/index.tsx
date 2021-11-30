/* eslint-disable camelcase */
import PostItem from '@cmpts/postItem'

function Feed({ posts }: any) {
  return (
    <div className="w-full h-full">
      {posts.map((post: any) => (
        <PostItem
          key={post.created_at}
          title={post.title}
          createdAt={post.created_at}
          number={post.number}
        />
      ))}
    </div>
  )
}

export default Feed
