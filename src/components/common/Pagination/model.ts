import { range, last } from 'lodash'

export type Page = {
  number: number | null
  isSeparator: boolean
  isCurrent: boolean
}

const SEPARATOR = 'SEPARATOR'

export const getVisiblePages = (
  page: number,
  pageSize: number,
  total: number
): Page[] => {
  const totalPages = getTotalPages(total, pageSize)
  const r = 2
  let pages: ('SEPARATOR' | number)[] = range(page - r, page + r + 1)
  pages = pages.filter((p) => {
    return p >= 1 && p <= totalPages
  })

  // always add first and last page - and separator if needed
  // but there is only small gap (one number) put that number instead of separator
  if (pages[0] !== 1) {
    if (pages[0] === 2) {
      pages = [1, ...pages]
    } else if (pages[0] === 3) {
      pages = [1, 2, ...pages]
    } else {
      pages = [1, SEPARATOR, ...pages]
    }
  }
  if (pages.length > 0 && last(pages) !== totalPages) {
    if (last(pages) === totalPages - 1) {
      pages = [...pages, totalPages]
    } else if (last(pages) === totalPages - 2) {
      pages = [...pages, totalPages - 1, totalPages]
    } else {
      pages = [...pages, SEPARATOR, totalPages]
    }
  }

  const newPages: ('SEPARATOR' | number)[] = []
  pages.forEach((p, idx) => {
    if (idx > 0 && pages[idx - 1] === SEPARATOR && p === SEPARATOR) {
      return
    }
    newPages.push(p)
  })

  return newPages.map((p) => {
    if (p === SEPARATOR) {
      return {
        number: null,
        isCurrent: false,
        isSeparator: true,
      }
    }
    return {
      number: p,
      isCurrent: p === page,
      isSeparator: false,
    }
  })
}

export const getTotalPages = (total: number, pageSize: number): number => {
  if (Math.floor(total / pageSize) === total / pageSize) {
    return total / pageSize
  } else {
    return Math.floor(total / pageSize) + 1
  }
}
