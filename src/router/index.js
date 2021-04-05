import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsList from '../pages/ProductsList.vue'
import ProductDetails from '../pages/ProductDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: ProductsList
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
