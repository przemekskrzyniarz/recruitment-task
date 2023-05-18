import { Ref, computed, ref } from 'vue'

interface PaginationOptions {
  pageSize?: number
}

export function usePaginate<T>(objects: Ref<T[]>, opts?: PaginationOptions) {
  const { pageSize = 10 } = opts || {}
  const page = ref(1)
  const startIdx = computed(() => (page.value - 1) * pageSize)
  const endIdx = computed(() => startIdx.value + pageSize)
  const pageObjects = computed(() => {
    return objects.value.slice(startIdx.value, endIdx.value)
  })

  const setPage = (p: number) => {
    page.value = p
  }

  return {
    pageObjects,
    page: computed(() => page.value),
    setPage,
    startIdx,
    endIdx,
  }
}
