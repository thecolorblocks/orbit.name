const shortenAddress = (address) => {
  const length = address.length
  return address.slice(0, 5) + '...' + address.slice(length-5)
}

const separateThousands = (number) => {
  return number.toLocaleString('en-US')
}

// Make pseudorandom avatar generator

export {
  shortenAddress,
  separateThousands
}