import fetcher from './axios'

export const getData = async () => {
  return await fetcher(import.meta.env.VITE_GET_DATA)
    .then(data => data)
    .catch(err => console.error(err))
}
