import allInvestors from './data/investors.json'
import { InvestorDTO } from '@/api/investors.types'

export const sleep = async (ms: number) => {
  return new Promise((r) => setTimeout(r, ms))
}

export const BASE_API_URL = 'https://strapi.vestbee.com'

export const getApiUrl = (path: string) => {
  return new URL(path, BASE_API_URL).href
}

export const fetchInvestors = async (): Promise<InvestorDTO[]> => {
  await sleep(200 + Math.random() * 400)
  return allInvestors as InvestorDTO[]
}

Object.assign(window, { fetchInvestors })
