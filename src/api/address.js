import http from './http'

const address = {
  fetchInscriptionsUTXO: (address, cursor, size) => {
    return http.get(`/address/${address}?cursor=${cursor}&size=${size}`)
  }
}

export default address