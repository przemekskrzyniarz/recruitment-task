import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/Homepage.vue'
import InvestorDetails from './pages/InvestorDetails/InvestorDetails.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/investor/:investorId',
    component: InvestorDetails,
    props: true,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
