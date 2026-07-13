<script setup>
// Dibuja la "forma" de un tono tailandés como un trazo, usado como
// elemento visual recurrente en toda la app (nav, tarjetas, quiz futuro).
defineProps({
  type: {
    type: String,
    required: true,
    validator: (v) => ['mid', 'low', 'falling', 'high', 'rising'].includes(v)
  },
  animate: {
    type: Boolean,
    default: true
  }
})

const paths = {
  mid: 'M5,20 L95,20',
  low: 'M5,32 L95,32',
  falling: 'M5,9 L45,9 C72,9 86,32 95,34',
  high: 'M5,8 L85,8 C93,8 95,13 95,17',
  rising: 'M5,32 C28,32 55,10 95,7'
}

const labels = {
  mid: 'Tono medio',
  low: 'Tono bajo',
  falling: 'Tono descendente',
  high: 'Tono alto',
  rising: 'Tono ascendente'
}
</script>

<template>
  <svg
    class="tone-stroke"
    :class="{ 'tone-stroke--animate': animate }"
    viewBox="0 0 100 40"
    role="img"
    :aria-label="labels[type]"
  >
    <path :d="paths[type]" pathLength="1" fill="none" />
  </svg>
</template>

<style scoped>
.tone-stroke {
  width: 100%;
  height: auto;
  overflow: visible;
}

.tone-stroke path {
  stroke: currentColor;
  stroke-width: 4;
  stroke-linecap: round;
}

.tone-stroke--animate path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: draw-stroke 0.9s ease forwards;
}

@keyframes draw-stroke {
  to {
    stroke-dashoffset: 0;
  }
}
</style>