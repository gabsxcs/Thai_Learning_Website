<script setup>
const vowelPairs = [
  {
    id: 'a',
    short: { form: 'อะ', rom: 'a' },
    long: { form: 'อา', rom: 'aa' },
    note: '"a" as in "about" — held longer, like "a" in "father"',
  },
  {
    id: 'i',
    short: { form: 'อิ', rom: 'i' },
    long: { form: 'อี', rom: 'ii' },
    note: '"i" as in "sit" — held longer, like "ee" in "see"',
  },
  {
    id: 'ue',
    short: { form: 'อึ', rom: 'ue' },
    long: { form: 'อือ', rom: 'uue' },
    note: 'No English equivalent — spread your lips as if smiling',
  },
  {
    id: 'u',
    short: { form: 'อุ', rom: 'u' },
    long: { form: 'อู', rom: 'uu' },
    note: '"u" as in "put" — held longer, like "oo" in "food"',
  },
  {
    id: 'e',
    short: { form: 'เอะ', rom: 'e' },
    long: { form: 'เอ', rom: 'ee' },
    note: '"e" as in "bed" — held longer, like "ay" in "day" (no glide)',
  },
  {
    id: 'ae',
    short: { form: 'แอะ', rom: 'ae' },
    long: { form: 'แอ', rom: 'aae' },
    note: '"a" as in "cat" — held longer',
  },
  {
    id: 'o',
    short: { form: 'โอะ', rom: 'o' },
    long: { form: 'โอ', rom: 'oo' },
    note: '"o" as in "boat" — held longer',
  },
  {
    id: 'aw',
    short: { form: 'เอาะ', rom: 'aw' },
    long: { form: 'ออ', rom: 'aaw' },
    note: '"o" as in "dog" — held longer, like "all"',
  },
  {
    id: 'er',
    short: { form: 'เออะ', rom: 'er' },
    long: { form: 'เออ', rom: 'uur' },
    note: 'like "u" in "fur" without the r sound — held longer',
  },
  {
    id: 'ia',
    short: { form: 'เอียะ', rom: 'ia' },
    long: { form: 'เอีย', rom: 'iia' },
    note: 'a glide from "ee" to "a"',
  },
  {
    id: 'uea',
    short: { form: 'เอือะ', rom: 'uea' },
    long: { form: 'เอือ', rom: 'uuea' },
    note: 'a glide from "ue" to "a"',
  },
  {
    id: 'ua',
    short: { form: 'อัวะ', rom: 'ua' },
    long: { form: 'อัว', rom: 'uua' },
    note: 'a glide from "oo" to "a"',
  },
]

const specialGroups = [
  {
    title: 'Mai Muan vs. Mai Malai',
    items: [
      { form: 'ใ-', rom: 'ai', name: 'sara ai mai muan' },
      { form: 'ไ-', rom: 'ai', name: 'sara ai mai malai' },
    ],
    note: 'Both are pronounced exactly the same way: "ai". Mai muan (ใ) shows up in only about 20 common words — everything else uses mai malai (ไ).',
  },
  {
    title: 'Sara Am',
    items: [
      { form: 'อำ', rom: 'am', name: 'short (most words)' },
      { form: 'อำ', rom: 'aam', name: 'long (rare, e.g. น้ำ)' },
    ],
    note: 'Written the same way every time — the rare long reading is something you just memorize case by case.',
  },
  {
    title: 'Reu',
    items: [
      { form: 'ฤ', rom: 'reu', name: 'short' },
      { form: 'ฤๅ', rom: 'reuu', name: 'long' },
    ],
    note: 'A consonant-vowel hybrid borrowed from Sanskrit. Common in words like ฤดู (season).',
  },
  {
    title: 'Leu (obsolete)',
    items: [
      { form: 'ฦ', rom: 'leu', name: 'short' },
      { form: 'ฦๅ', rom: 'leuu', name: 'long' },
    ],
    note: 'No longer used in modern Thai — included here only for completeness.',
  },
]

function playSound(id, length) {
  const audio = new Audio(`/audio/vowels/${id}-${length}.mp3`)
  audio.play().catch(() => {
    console.warn(`Missing audio file for vowel: ${id}-${length}`)
  })
}
</script>

<template>
  <main class="vowels">
    <section class="intro">
      <h1>Regular Vowel Sounds</h1>
      <p>
        Tap a card to listen. Each pair shows the short and long version of the same vowel sound
        side by side.
      </p>
    </section>

    <section class="pairs">
      <article v-for="v in vowelPairs" :key="v.id" class="pair">
        <div class="pair__cards">
          <button
            type="button"
            class="vowel-card vowel-card--short"
            @click="playSound(v.id, 'short')"
          >
            <span class="vowel-card__form">{{ v.short.form }}</span>
            <span class="vowel-card__rom">{{ v.short.rom }}</span>
          </button>

          <span class="pair__arrow" aria-hidden="true">→</span>

          <button
            type="button"
            class="vowel-card vowel-card--long"
            @click="playSound(v.id, 'long')"
          >
            <span class="vowel-card__form">{{ v.long.form }}</span>
            <span class="vowel-card__rom">{{ v.long.rom }}</span>
          </button>
        </div>
        <p class="pair__note">{{ v.note }}</p>
      </article>
    </section>

    <!-- Special Vowel Symbols -->
    <section class="special">
      <h2>Special Vowel Symbols</h2>
      <p class="special__intro">
        These symbols don't fit the regular short/long pattern above — some are exceptions, some are
        pronunciation twins, and some are barely used today.
      </p>

      <div class="special__grid">
        <article v-for="(group, i) in specialGroups" :key="group.title" class="special-card">
          <span class="special-card__number">{{ i + 1 }}</span>
          <h3>{{ group.title }}</h3>
          <div class="special-card__items">
            <div
              v-for="item in group.items"
              :key="item.form + item.name"
              class="special-card__item"
            >
              <span class="special-card__form">{{ item.form }}</span>
              <span class="special-card__rom">{{ item.rom }}</span>
              <span class="special-card__name">{{ item.name }}</span>
            </div>
          </div>
          <p class="special-card__note">{{ group.note }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.vowels {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-4) var(--space-3) var(--space-5);
}

.intro {
  max-width: 60ch;
  margin-bottom: var(--space-4);
}

.intro h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: var(--space-2);
}

.intro p {
  color: #55503f;
  line-height: 1.6;
}

.pairs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--parchment-soft);
}

.pair__cards {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
}

.vowel-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  padding: var(--space-2) var(--space-1);
  border-radius: var(--radius);
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
  font-family: inherit;
}

.vowel-card:hover {
  transform: translateY(-2px);
}

.vowel-card--short {
  background: white;
  border: 1.5px solid var(--parchment-soft);
}

.vowel-card--short .vowel-card__form {
  color: var(--ink);
}

.vowel-card--long {
  background: var(--teal);
  border: 1.5px solid var(--teal-deep);
}

.vowel-card--long .vowel-card__form {
  color: white;
}

.vowel-card--long .vowel-card__rom {
  color: rgba(255, 255, 255, 0.85);
}

.vowel-card__form {
  font-family: var(--font-display);
  font-size: 1.5rem;
}

.vowel-card__rom {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--teal);
}

.pair__arrow {
  color: #a89f8c;
  font-size: 0.9rem;
}

.pair__note {
  margin-top: var(--space-1);
  font-size: 0.8rem;
  text-align: center;
  color: #6b6255;
  line-height: 1.4;
}

/* Special symbols */
.special {
  padding-top: var(--space-4);
}

.special h2 {
  font-size: 1.6rem;
  margin-bottom: var(--space-1);
}

.special__intro {
  max-width: 60ch;
  color: #55503f;
  line-height: 1.6;
  margin-bottom: var(--space-3);
}

.special__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.special-card {
  position: relative;
  background: white;
  border: 1px solid var(--parchment-soft);
  border-radius: var(--radius);
  padding: var(--space-3);
}

.special-card__number {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--marigold);
  font-weight: 700;
}

.special-card h3 {
  font-size: 1.1rem;
  margin-bottom: var(--space-2);
}

.special-card__items {
  display: flex;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
}

.special-card__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--parchment);
  border-radius: var(--radius);
  padding: var(--space-2) var(--space-1);
}

.special-card__form {
  font-family: var(--font-display);
  font-size: 1.6rem;
  color: var(--teal);
}

.special-card__rom {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--ink);
  margin-top: 0.15rem;
}

.special-card__name {
  font-size: 0.7rem;
  color: #6b6255;
  margin-top: 0.15rem;
}

.special-card__note {
  font-size: 0.8rem;
  color: #6b6255;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 900px) {
  .pairs {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .special__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .pairs {
    grid-template-columns: 1fr;
  }
}
</style>
