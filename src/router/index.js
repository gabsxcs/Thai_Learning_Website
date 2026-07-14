import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TonesView from '../views/TonesView.vue'
import QuizToneView from '../views/QuizzToneView.vue'
import ConsonantsView from '../views/ConsonantsView.vue'
import VowelsView from '../views/VowelsView.vue'
import ReadingView from '../views/ReadingView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/tones', name: 'tones', component: TonesView },
  { path: '/tones/quizz', name: 'tonesquizz', component: QuizToneView },
  { path: '/reading/consonants', name: 'consonants', component: ConsonantsView },
  { path: '/reading/vowels', name: 'vowels', component: VowelsView },
  { path: '/reading', name: 'reading', component: ReadingView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
