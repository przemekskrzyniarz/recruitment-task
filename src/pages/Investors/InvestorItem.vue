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
  <div class="border rounded-lg bg-blue-50 border-blue-100 p-4">
    <h3 class="text-base font-semibold">
      <router-link :to="investorDetailsUrl"> {{ investor.name }}</router-link>
    </h3>
  </div>
</template>
