import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
// eslint-disable-next-line import/prefer-default-export
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
