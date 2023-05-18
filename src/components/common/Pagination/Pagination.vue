<script setup lang="ts">
import { computed, toRef, watch } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import { useOffsetPagination } from '@vueuse/core'
import classNames from 'classnames'
import { Page, getVisiblePages } from './model'

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  initialPage: Number,
  pageSize: {
    type: Number,
    default: 24,
  },
  baseButtonClass: {
    type: String,
    default:
      // 'w-8 relative inline-flex items-center px-2 py-2 rounded-l-md border  text-sm font-medium',
      'relative inline-flex items-center px-4 py-2 border text-sm font-medium',
  },
  buttonClass: {
    type: String,
    default: 'border-gray-200 text-gray-500 bg-gray-50 hover:bg-gray-100',
  },
  currentButtonClass: {
    type: String,
    default: 'z-10 border-blue-400 text-blue-500 bg-blue-100 hover:bg-blue-200',
  },
  hoverButtonClass: {
    type: String,
    default: 'hover:opacity-75',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showTotalResults: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['change'])

const total = toRef(props, 'total')

const {
  currentPage,
  currentPageSize,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  total,
  page: props.initialPage || 1,
  pageSize: props.pageSize || 20,
})

const visiblePages = computed<Page[]>(() => {
  return getVisiblePages(currentPage.value, currentPageSize.value, props.total)
})

const startIndex = computed(() => {
  return (currentPage.value - 1) * props.pageSize
})

const endIndex = computed(() => {
  return Math.min(startIndex.value + props.pageSize - 1, props.total - 1)
})

watch(currentPage, (newVal) => {
  emit('change', newVal)
})

const goTo = (page: Page) => {
  if (page.number && page.number !== currentPage.value) {
    currentPage.value = page.number
  }
}
</script>

<template>
  <div>
    <div
      class="bg-white py-3 flex items-center justify-between border-gray-200"
      :class="disabled && 'opacity-50'"
    >
      <div class="flex-1 flex justify-between sm:hidden items-center">
        <button
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          @click="prev()"
          :disabled="isFirstPage || disabled"
        >
          Previous
        </button>
        <div>{{ currentPage }} / {{ pageCount }}</div>
        <button
          class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          @click="next()"
          :disabled="isLastPage || disabled"
        >
          Next
        </button>
      </div>
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">{{ startIndex + 1 }}</span>
            to
            <span class="font-medium">{{ endIndex + 1 }}</span>
            <template v-if="showTotalResults">
              of
              <span class="font-medium">{{ total }}</span>
            </template>
            results
          </p>
        </div>
        <div>
          <nav
            class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              class="rounded-l-md px-2"
              :class="
                classNames(baseButtonClass, buttonClass, hoverButtonClass)
              "
              @click="prev"
              :disabled="isFirstPage || disabled"
            >
              <span class="sr-only">Previous</span>
              <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              aria-current="page"
              class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              :class="
                classNames(
                  page.isCurrent ? props.currentButtonClass : props.buttonClass
                )
              "
              v-for="(page, idx) in visiblePages"
              :key="idx"
              @click="goTo(page)"
              :disabled="disabled"
            >
              <span v-if="page.isSeparator">...</span>
              <span v-else>{{ page.number }}</span>
            </button>
            <button
              class="rounded-r-md px-2"
              :class="
                classNames(baseButtonClass, buttonClass, hoverButtonClass)
              "
              @click="next"
              :disabled="isLastPage || disabled"
            >
              <span class="sr-only">Next</span>
              <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
