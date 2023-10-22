import http from './http'

const name = {
  fetchNameInfo: (name) => {
    return http.get(`/name/${name}`)
  }
}

export {
  name,
}