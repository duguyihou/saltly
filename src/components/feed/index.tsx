/* eslint-disable camelcase */
import Post from '@cmpts/post'

function Feed({ posts }: any) {
  return (
    <div className="w-full h-full">
      {posts.map((post: any) => (
        <Post
          key={post.created_at}
          title={post.title}
          createdAt={post.created_at}
        />
      ))}
    </div>
  )
}

export default Feed
