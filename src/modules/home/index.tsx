import Feed from '@cmpts/feed'
import Layout from '@cmpts/layout'
import Navbar from '@cmpts/navbar'
import { usePosts } from '@hooks/usePosts'

function Home() {
  const { posts, isLoading, isError } = usePosts()
  if (isError) {
    return (
      <Layout>
        <h1>error</h1>
      </Layout>
    )
  }
  if (isLoading) {
    return (
      <Layout>
        <h1>loading</h1>
      </Layout>
    )
  }
  return (
    <Layout>
      <Navbar title="home" />
      {posts && <Feed posts={posts} />}
    </Layout>
  )
}

export default Home
