
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import {createRouter, createWebHistory} from "vue-router";

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router