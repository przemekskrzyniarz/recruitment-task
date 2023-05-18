<script setup lang="ts">
import { useInvestorsStore } from '@/stores/investorsStore'
import InvestorItem from './InvestorItem.vue'
import { usePaginate } from '@/hooks/usePaginate'
import Pagination from '@/components/common/Pagination/Pagination.vue'
import { InvestorDTO } from '@/api/investors.types'
import { reactive, computed } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { sortArrayByPropertyWithoutNumbers } from '@/utils/sorts'
import { filterByKeys } from '@/utils/filters'

const store = useInvestorsStore()

const filters = reactive({
  search: '',
})

const sortedInvestors = computed(() =>
  sortArrayByPropertyWithoutNumbers(filteredInvestors.value, 'name')
)

const filteredInvestors = computed(() => {
  return filterByKeys(store.investors, filters.search, [
    'name',
    ['stages', 'name'],
  ])
})

const pageSize = 10
const { pageObjects, setPage } = usePaginate<InvestorDTO>(sortedInvestors, {
  pageSize,
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-lg font-semibold">Investors</h1>
    <p v-if="store.fetchInProgress">Loading ...</p>

    <div class="my-8 flex">
      <div class="relative">
        <MagnifyingGlassIcon
          class="h-5 w-5 absolute top-[12px] left-[10px] text-gray-400"
          aria-hidden="true"
        />
        <input
          class="border rounded-lg bg-blue-50 p-2 pl-10 text-gray-500"
          placeholder="Type name"
          v-model="filters.search"
        />
      </div>
    </div>
    <div v-for="investor in pageObjects" :key="investor.id" class="my-4">
      <InvestorItem :investor="investor" />
    </div>
    <Pagination
      :total="sortedInvestors.length"
      :pageSize="pageSize"
      @change="setPage"
    />
  </div>
</template>
