import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
// eslint-disable-next-line import/prefer-default-export
export const useUser = () => {
  const { data, error } = useSWR(`${import.meta.env.BASE_URL}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}
