import http from './http'

const address = {
  fetchInscriptions: (address, offset, limit, orderby, order) => {
    return http.get(`/address/${address}?offset=${offset}&limit=${limit}&order_by=${orderby}&order=${order}`)
  }
}

export default address