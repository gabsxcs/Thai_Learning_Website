<script setup>
import { ref } from 'vue'
import ToneStroke from '../components/ToneStroke.vue'

const examples = [
  { type: 'mid', word: 'มา', ipa: 'maa', meaning: 'to come', color: 'var(--teal)' },
  { type: 'low', word: 'ไก่', ipa: 'gài', meaning: 'chicken', color: 'var(--lacquer)' },
  { type: 'falling', word: 'ได้', ipa: 'dâai', meaning: 'to be able', color: 'var(--marigold)' },
  { type: 'high', word: 'นับ', ipa: 'náp', meaning: 'to count', color: 'var(--gold-line)' },
  { type: 'rising', word: 'ฉัน', ipa: 'chǎn', meaning: 'I / me', color: 'var(--teal-deep)' }
]

const playingType = ref(null)
let currentAudio = null

function playTone(type) {
  if (playingType.value === type) {
    currentAudio?.pause()
    playingType.value = null
    return
  }

  currentAudio?.pause()

  currentAudio = new Audio(`/audio/tones/${type}.mp3`)
  playingType.value = type
  currentAudio.play().catch(() => {
    console.warn(`Missing audio file for tone: ${type}`)
    playingType.value = null
  })
  currentAudio.onended = () => {
    playingType.value = null
  }
}
</script>

<template>
  <main class="tones">
    <section class="intro">
      <h1>The Five Tones of Thai</h1>
      <p>
        In Thai, tones aren't about emphasis or emotion — they're
        part of the word itself. The same syllable can mean five completely
        different things depending on the pitch shape your voice makes while
        saying it. Getting the tone "close enough" isn't good enough: a wrong
        tone is a different word.
      </p>
      <p>
        Thai has five tones: <strong>mid</strong>, <strong>low</strong>,
        <strong>falling</strong>, <strong>high</strong>, and
        <strong>rising</strong>. Each one has its own pitch contour — flat,
        dipping, dropping sharply, staying high, or climbing upward. Below,
        you can see and hear each one.
      </p>
    </section>

    <section class="listen" aria-label="Listen to each Thai tone">
      <h2>Listen to each tone</h2>
      <div class="listen__grid">
        <button
          v-for="ex in examples"
          :key="ex.type"
          class="tone-card"
          :class="{ 'tone-card--playing': playingType === ex.type }"
          type="button"
          @click="playTone(ex.type)"
        >
          <div class="tone-card__stroke" :style="{ color: ex.color }">
            <ToneStroke :type="ex.type" :animate="false" />
          </div>
          <p class="tone-card__word">{{ ex.word }}</p>
          <p class="tone-card__ipa">{{ ex.ipa }}</p>
          <p class="tone-card__meaning">{{ ex.type }}</p>
          <span class="tone-card__play">
            <svg v-if="playingType !== ex.type" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path d="M6 4l14 8-14 8V4z" fill="currentColor" />
            </svg>
            <svg v-else viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <rect x="5" y="4" width="5" height="16" fill="currentColor" />
              <rect x="14" y="4" width="5" height="16" fill="currentColor" />
            </svg>
            {{ playingType === ex.type ? 'Playing' : 'Play' }}
          </span>
        </button>
      </div>
    </section>

    <section class="modes">
      <h2>Choose your practice mode</h2>
      <div class="modes__grid">
        <RouterLink to="/tones/quizz" class="mode-card">
          <span class="mode-card__eyebrow">Listen</span>
          <h3>Take the Quiz</h3>
          <p>Hear a syllable and pick the correct tone. Great for training your ear first.</p>
          <span class="mode-card__link">Start quiz →</span>
        </RouterLink>

        <RouterLink to="/tones/practicar" class="mode-card">
          <span class="mode-card__eyebrow">Speak</span>
          <h3>Record & Compare</h3>
          <p>Record your voice and compare your pitch curve against a native speaker's, in real time.</p>
          <span class="mode-card__link">Start recording →</span>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.tones {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-4) var(--space-3) var(--space-5);
}

.intro {
  max-width: 68ch;
  margin-bottom: var(--space-4);
}

.intro h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: var(--space-3);
}

.intro p {
  line-height: 1.7;
  color: #3a342b;
  margin-bottom: var(--space-2);
}

/* Listen box */
.listen {
  padding: var(--space-4) 0;
  border-top: 1px solid var(--parchment-soft);
  border-bottom: 1px solid var(--parchment-soft);
}

.listen h2,
.modes h2 {
  font-size: 1.6rem;
  margin-bottom: var(--space-3);
}

.listen__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-2);
}

.tone-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: white;
  border: 1px solid var(--parchment-soft);
  border-radius: var(--radius);
  padding: var(--space-3) var(--space-1) var(--space-2);
  cursor: pointer;
  font-family: inherit;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.tone-card:hover {
  border-color: var(--teal);
  transform: translateY(-2px);
}

.tone-card--playing {
  border-color: var(--marigold);
}

.tone-card__stroke {
  height: 30px;
  width: 80%;
  margin-bottom: var(--space-2);
}

.tone-card__word {
  font-family: var(--font-display);
  font-size: 1.5rem;
  margin: 0;
}

.tone-card__ipa {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--teal);
  margin: 0.15rem 0 0;
}

.tone-card__meaning {
  font-size: 0.8rem;
  color: #6b6255;
  margin: 0.1rem 0 var(--space-1);
}

.tone-card__play {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--marigold);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* Practice mode selection */
.modes {
  padding: var(--space-4) 0 var(--space-5);
}

.modes__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.mode-card {
  display: block;
  background: white;
  border: 1px solid var(--parchment-soft);
  border-radius: var(--radius);
  padding: var(--space-3);
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.mode-card:hover {
  border-color: var(--teal);
  transform: translateY(-2px);
}

.mode-card__eyebrow {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--marigold);
}

.mode-card h3 {
  font-size: 1.3rem;
  margin: 0.4rem 0 0.6rem;
}

.mode-card p {
  color: #55503f;
  line-height: 1.6;
  margin: 0 0 var(--space-2);
}

.mode-card__link {
  font-weight: 600;
  color: var(--teal);
}

/* Responsive */
@media (max-width: 720px) {
  .listen__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .modes__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .listen__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>