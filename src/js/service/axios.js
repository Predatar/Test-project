import axios from 'axios'

const fetcher = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export default fetcher
