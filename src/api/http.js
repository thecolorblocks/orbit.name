import axios from "axios"

const http = axios.create({
  baseURL: 'https://orbit-server.pages.dev/api',
  headers: {
    'Accept': 'application/json',
  }
})

export default http