import { useAppDispatch, useAppSelector } from '@app/hooks'
import { fetchPost, postsSelector } from '@app/postSlice'
import Feed from '@cmpts/feed'
import Layout from '@cmpts/layout'
import { useEffect } from 'react'

function Home() {
  const dispatch = useAppDispatch()
  const { posts } = useAppSelector(postsSelector)
  useEffect(() => {
    dispatch(fetchPost())
  }, [])
  return <Layout>{posts && <Feed posts={posts} />}</Layout>
}

export default Home
