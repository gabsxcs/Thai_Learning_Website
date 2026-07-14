<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ToneStroke from './ToneStroke.vue'

const route = useRoute()
const menuOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/reading', label: 'Reading' },
  { to: '/tones', label: 'Tones' },
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="navbar__inner">
      <RouterLink to="/" class="navbar__brand" @click="closeMenu">
        <span class="navbar__brand-th">เสียง</span>
        <span class="navbar__brand-word">siang</span>
      </RouterLink>

      <button
        class="navbar__toggle"
        :aria-expanded="menuOpen"
        aria-label="Abrir menú"
        @click="menuOpen = !menuOpen"
      >
        <span />
        <span />
        <span />
      </button>

      <nav class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="navbar__link"
          :class="{ 'navbar__link--active': route.path === link.to }"
          @click="closeMenu"
        >
          {{ link.label }}
          <span v-if="route.path === link.to" class="navbar__indicator">
            <ToneStroke type="mid" :animate="true" />
          </span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--nav-height);
  background: var(--parchment);
  border-bottom: 1px solid var(--parchment-soft);
}

.navbar__inner {
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--space-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__brand {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  transition: opacity 0.15s ease;
}

.navbar__brand:hover {
  opacity: 0.75;
}

.navbar__brand-th {
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--teal);
}

.navbar__brand-word {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  color: var(--ink);
}

.navbar__links {
  display: flex;
  gap: var(--space-4);
}

.navbar__link {
  position: relative;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.4rem 0;
  color: var(--ink);
  transition: color 0.15s ease;
}

.navbar__link::before {
  content: '';
  position: absolute;
  left: 0;
  right: 100%;
  bottom: -6px;
  height: 2px;
  background: var(--gold-line);
  transition: right 0.2s ease;
}

.navbar__link:hover {
  color: var(--teal);
}

.navbar__link:hover::before {
  right: 0;
}

.navbar__link--active {
  color: var(--teal);
}

.navbar__link--active::before {
  content: none;
}

.navbar__indicator {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 8px;
  color: var(--gold-line);
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.navbar__toggle span {
  display: block;
  height: 2px;
  background: var(--ink);
  border-radius: 2px;
}

@media (max-width: 720px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__links {
    position: absolute;
    top: var(--nav-height);
    left: 0;
    right: 0;
    background: var(--parchment);
    border-bottom: 1px solid var(--parchment-soft);
    flex-direction: column;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s ease;
  }

  .navbar__links--open {
    max-height: 300px;
  }

  .navbar__link {
    padding: var(--space-2) var(--space-3);
    border-top: 1px solid var(--parchment-soft);
  }

  .navbar__indicator {
    display: none;
  }
}
</style>
