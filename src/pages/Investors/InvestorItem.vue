<script setup lang="ts">
import { InvestorDTO } from '@/api/investors.types'
import { computed, PropType } from 'vue'

const props = defineProps({
  investor: {
    type: Object as PropType<InvestorDTO>,
    required: true,
  },
})
const investorDetailsUrl = computed(() => {
  if (props.investor) {
    return `/investor/${props.investor.id}`
  }
  return '/'
})
</script>
<template>
  <router-link :to="investorDetailsUrl">
    <div class="border rounded-lg bg-blue-50 border-blue-100 p-4">
      <h3 class="text-base font-semibold flex gap-4">
        <span>{{ investor.name }}</span>
        <template v-for="sector in investor.sectors">
          <span>{{ sector.name }}</span>
        </template>
        <template v-for="stage in investor.stages"
          ><span>{{ stage.name }}</span></template
        >
      </h3>
    </div>
  </router-link>
</template>
