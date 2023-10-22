import axios from "axios"

const http = axios.create({
  baseURL: 'https://api.orbit.name/api',
  headers: {
    'Accept': 'application/json',
  }
})

export default http