import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TonesView from '../views/TonesView.vue'
import QuizToneView from '../views/QuizzToneView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, },
  { path: '/tones', name: 'tones', component: TonesView,},
  { path: '/tones/quizz', name: 'tonesquizz', component: QuizToneView,}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router