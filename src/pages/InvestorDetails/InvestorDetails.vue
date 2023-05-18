<script setup lang="ts">
import { getApiUrl } from '@/api'
import { useInvestorsStore } from '@/stores/investorsStore'
import { computed } from 'vue'
const props = defineProps({
  investorId: {
    type: String,
    required: true,
  },
})

const store = useInvestorsStore()
const investorId = parseInt(props.investorId, 10)
const investor = computed(() => store.getById(investorId))

const imgSrc = computed(() => {
  return getApiUrl(investor.value.logo.url)
})
</script>
<template>
  <div class="p-8">
    <div class="my-4">
      <router-link to="/">Back to investor list</router-link>
    </div>

    <div class="flex justify-center">
      <div
        v-if="investor"
        class="border rounded-lg bg-blue-50 border-blue-100 p-4 w-1/2"
      >
        <div class="flex justify-center">
          <img
            :src="imgSrc"
            class="h-20 w-20 rounded-lg ring-4 ring-white sm:h-24 sm:w-24 object-scale-down"
          />
        </div>
        <h3 class="text-base font-semibold">{{ investor.name }}</h3>

        <div class="my-4">
          <h4 class="text-gray-800">Sectors</h4>
          <ul class="pl-1">
            <li v-for="sector in investor.sectors" :key="sector.id">
              <span class="text-gray-400"> - {{ sector.name }} </span>
            </li>
          </ul>
        </div>
        <div class="my-4">
          <h4 class="text-gray-800">Stages</h4>
          <ul class="pl-1">
            <li v-for="stage in investor.stages" :key="stage.id">
              <span class="text-gray-400"> - {{ stage.name }} </span>
            </li>
          </ul>
        </div>
      </div>
      <div v-else>No investor</div>
    </div>
  </div>
</template>
