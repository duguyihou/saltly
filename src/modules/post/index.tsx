/* eslint-disable react/no-children-prop */
import Layout from '@cmpts/layout'
import Navbar from '@cmpts/navbar'
import { usePost } from '@hooks/usePosts'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

function Post() {
  const { id } = useParams<{ id: string }>()
  const { post, isError, isLoading } = usePost(Number(id))
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
      <Navbar title={`${post.title}`} />
      <div className="w-full px-5 py-3">
        <ReactMarkdown children={post.body} remarkPlugins={[remarkGfm]} />
      </div>
    </Layout>
  )
}

export default Post
