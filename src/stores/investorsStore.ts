import { onMounted, ref } from 'vue'
import { InvestorDTO } from '@/api/investors.types'
import { defineStore } from 'pinia'
import { fetchInvestors } from '@/api'

export const useInvestorsStore = defineStore('investors', () => {
  const investors = ref<InvestorDTO[]>([])
  const fetchInProgress = ref(false)
  const fetch = async () => {
    fetchInProgress.value = true
    const allInvestors = await fetchInvestors()
    investors.value = allInvestors
    fetchInProgress.value = false
  }

  const getById = (investorId: number) => {
    return investors.value.filter((i) => i.id === investorId)[0]
  }

  onMounted(async () => {
    await fetch()
  })

  return {
    investors,
    fetchInProgress,
    fetch,
    getById,
  }
})
