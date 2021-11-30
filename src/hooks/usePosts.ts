import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
export const usePosts = () => {
  const { data, error } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/issues`,
    fetcher,
  )

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const usePost = (id: number) => {
  const { data, error } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/issues/${id}`,
    fetcher,
  )

  return {
    post: data,
    isLoading: !error && !data,
    isError: error,
  }
}
