export const sortArrayByPropertyWithoutNumbers = (
  array: any[],
  key: string
) => {
  return array.sort((a, b) => {
    const key1 = a[key]
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, '')
      .trim()
    const key2 = b[key]
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, '')
      .trim()
    return key1.localeCompare(key2)
  })
}

export const sortArrayByOrderArray = (array: any, order: string[], key: string) => {
  array.sort((a: any, b: any) => {
    const key1 = a[key]
    const key2 = b[key]
    return order.indexOf(key1) > order.indexOf(key2) ? 1 : -1
  })

  return array
}
