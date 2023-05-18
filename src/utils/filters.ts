export const filterByKey = (
  array: any,
  searchValue: string,
  property: string
) => {
  return array.filter((element: any) => {
    if (searchValue && element.hasOwnProperty(property)) {
      return (
        element[property]
          .toLocaleLowerCase()
          .indexOf(searchValue.toLocaleLowerCase()) >= 0
      )
    }
    return true
  })
}

export const filterByArrayKeys = (
  array: any,
  searchValue: string,
  property: string[]
) => {
  return array.filter((element: any) => {
    if (searchValue && element.hasOwnProperty(property[0])) {
      return element[property[0]].some(
        (element: any) =>
          element[property[1]]
            .toLocaleLowerCase()
            .indexOf(searchValue.toLocaleLowerCase()) >= 0
      )
    }
    return true
  })
}

export const filterByKeys = (
  array: any,
  searchValue: string,
  properties: any[]
) => {
  const filteredArray = properties.flatMap((property: string | string[]) =>
    typeof property === 'string'
      ? filterByKey(array, searchValue, property)
      : filterByArrayKeys(array, searchValue, property)
  )
  return [...new Set(filteredArray)]
}
