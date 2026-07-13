<script setup>
import { ref, computed, onMounted } from 'vue'
import ToneStroke from '../components/ToneStroke.vue'

// Bank of quiz items. Add more words per tone here later —
// more variety = less chance of memorizing by word instead of by tone.
const bank = [
  { type: 'mid', word: 'มา', ipa: 'maa', meaning: 'to come' },
  { type: 'low', word: 'ไก่', ipa: 'gài', meaning: 'chicken' },
  { type: 'falling', word: 'ได้', ipa: 'dâai', meaning: 'to be able' },
  { type: 'high', word: 'นับ', ipa: 'náp', meaning: 'to count' },
  { type: 'rising', word: 'ฉัน', ipa: 'chǎn', meaning: 'I / me' }
]

const toneOptions = [
  { type: 'mid', label: 'Mid' },
  { type: 'low', label: 'Low' },
  { type: 'falling', label: 'Falling' },
  { type: 'high', label: 'High' },
  { type: 'rising', label: 'Rising' }
]

function shuffle(arr) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const questions = ref(shuffle(bank))
const currentIndex = ref(0)
const selectedType = ref(null)
const score = ref(0)
const finished = ref(false)

const currentQuestion = computed(() => questions.value[currentIndex.value])
const isAnswered = computed(() => selectedType.value !== null)
const isLast = computed(() => currentIndex.value === questions.value.length - 1)

let currentAudio = null

function playCurrent() {
  currentAudio?.pause()
  currentAudio = new Audio(`/audio/tones/${currentQuestion.value.type}.mp3`)
  currentAudio.play().catch(() => {
    console.warn(`Missing audio file for tone: ${currentQuestion.value.type}`)
  })
}

function selectAnswer(type) {
  if (isAnswered.value) return
  selectedType.value = type
  if (type === currentQuestion.value.type) {
    score.value++
  }
}

function nextQuestion() {
  if (isLast.value) {
    finished.value = true
    return
  }
  currentIndex.value++
  selectedType.value = null
  playCurrent()
}

function restart() {
  questions.value = shuffle(bank)
  currentIndex.value = 0
  selectedType.value = null
  score.value = 0
  finished.value = false
  playCurrent()
}

onMounted(() => {
  playCurrent()
})
</script>

<template>
  <main class="quiz">
    <RouterLink to="/tonos" class="quiz__back">← Back to Tones</RouterLink>

    <!-- Results screen -->
    <section v-if="finished" class="results">
      <h1>Quiz complete</h1>
      <p class="results__score">{{ score }} / {{ questions.length }}</p>
      <p class="results__message">
        <span v-if="score === questions.length">Perfect score. Your ear is sharp.</span>
        <span v-else-if="score >= questions.length / 2">Solid start — a few tones still mixing you up.</span>
        <span v-else>Tones take repetition. Try again and listen closely to the shape of the pitch.</span>
      </p>
      <button class="quiz__button" type="button" @click="restart">Try again</button>
    </section>

    <!-- Question screen -->
    <section v-else class="question">
      <p class="question__progress">Question {{ currentIndex + 1 }} of {{ questions.length }}</p>

      <button class="question__play" type="button" @click="playCurrent">
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
          <path d="M6 4l14 8-14 8V4z" fill="currentColor" />
        </svg>
        Play sound
      </button>

      <p class="question__prompt">Which tone did you hear?</p>

      <div class="options">
        <button
          v-for="opt in toneOptions"
          :key="opt.type"
          type="button"
          class="option"
          :class="{
            'option--correct': isAnswered && opt.type === currentQuestion.type,
            'option--wrong': isAnswered && selectedType === opt.type && opt.type !== currentQuestion.type,
            'option--disabled': isAnswered && opt.type !== selectedType && opt.type !== currentQuestion.type
          }"
          :disabled="isAnswered"
          @click="selectAnswer(opt.type)"
        >
          <span class="option__stroke">
            <ToneStroke :type="opt.type" :animate="false" />
          </span>
          {{ opt.label }}
        </button>
      </div>

      <!-- Feedback -->
      <div v-if="isAnswered" class="feedback" :class="{ 'feedback--correct': selectedType === currentQuestion.type }">
        <p v-if="selectedType === currentQuestion.type" class="feedback__title">Correct!</p>
        <p v-else class="feedback__title">Not quite — that was the {{ currentQuestion.type }} tone.</p>
        <p class="feedback__word">
          {{ currentQuestion.word }}
          <span class="feedback__ipa">{{ currentQuestion.ipa }}</span>
          — {{ currentQuestion.meaning }}
        </p>
        <button class="quiz__button" type="button" @click="nextQuestion">
          {{ isLast ? 'See results' : 'Next question' }}
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.quiz {
  max-width: 640px;
  margin: 0 auto;
  padding: var(--space-4) var(--space-3) var(--space-5);
}

.quiz__back {
  display: inline-block;
  margin-bottom: var(--space-3);
  font-size: 0.9rem;
  color: var(--teal);
  font-weight: 600;
}

/* Question screen */
.question {
  text-align: center;
}

.question__progress {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: #6b6255;
  margin-bottom: var(--space-3);
}

.question__play {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 1.8rem;
  border: none;
  border-radius: 999px;
  background: var(--teal);
  color: white;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}

.question__play:hover {
  background: var(--teal-deep);
}

.question__prompt {
  margin: var(--space-3) 0 var(--space-2);
  font-size: 1rem;
  color: #3a342b;
}

/* Options */
.options {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-1);
  margin-bottom: var(--space-3);
}

.option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-1);
  background: white;
  border: 1px solid var(--parchment-soft);
  border-radius: var(--radius);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--ink);
  cursor: pointer;
  transition: border-color 0.15s ease, transform 0.15s ease, opacity 0.15s ease;
}

.option:hover:not(:disabled) {
  border-color: var(--teal);
  transform: translateY(-2px);
}

.option__stroke {
  display: block;
  width: 70%;
  height: 22px;
  color: var(--teal);
}

.option--correct {
  border-color: var(--teal);
  background: #eaf3f1;
}

.option--correct .option__stroke {
  color: var(--teal);
}

.option--wrong {
  border-color: var(--lacquer);
  background: #f6ebea;
}

.option--wrong .option__stroke {
  color: var(--lacquer);
}

.option--disabled {
  opacity: 0.45;
}

/* Feedback */
.feedback {
  margin-top: var(--space-2);
  padding: var(--space-3);
  border-radius: var(--radius);
  background: #f6ebea;
  border: 1px solid var(--lacquer);
}

.feedback--correct {
  background: #eaf3f1;
  border-color: var(--teal);
}

.feedback__title {
  font-weight: 700;
  margin: 0 0 var(--space-1);
}

.feedback__word {
  font-family: var(--font-display);
  font-size: 1.2rem;
  margin: 0 0 var(--space-2);
}

.feedback__ipa {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--teal);
  margin-left: 0.4rem;
}

.quiz__button {
  padding: 0.75rem 1.6rem;
  border: none;
  border-radius: var(--radius);
  background: var(--teal);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}

.quiz__button:hover {
  background: var(--teal-deep);
}

/* Results */
.results {
  text-align: center;
  padding: var(--space-4) 0;
}

.results__score {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--teal);
  margin: var(--space-2) 0;
}

.results__message {
  color: #55503f;
  margin-bottom: var(--space-3);
}

/* Responsive */
@media (max-width: 480px) {
  .options {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>