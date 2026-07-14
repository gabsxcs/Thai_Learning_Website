<script setup>
const midConsonants = [
  { letter: 'ก', name: 'ko kai', sound: 'k — unaspirated' },
  { letter: 'จ', name: 'cho chan', sound: 'j / soft ch ' },
  { letter: 'ฎ', name: 'do cha-da', sound: 'd' },
  { letter: 'ฏ', name: 'to pa-tak', sound: 't — unaspirated' },
  { letter: 'ด', name: 'do dek', sound: 'd' },
  { letter: 'ต', name: 'to tao', sound: 't — unaspirated' },
  { letter: 'บ', name: 'bo baimai', sound: 'b' },
  { letter: 'ป', name: 'po pla', sound: 'p — unaspirated' },
  { letter: 'อ', name: 'o ang', sound: 'silent / glottal stop (ʔ) at syllable start' },
]

const highConsonants = [
  { letter: 'ข', name: 'kho khai', sound: 'kh — aspirated k' },
  { letter: 'ฃ', name: 'kho khuat', sound: 'kh' },
  { letter: 'ฉ', name: 'cho ching', sound: 'ch — aspirated' },
  { letter: 'ฐ', name: 'tho than', sound: 'th — aspirated t' },
  { letter: 'ถ', name: 'tho thung', sound: 'th — aspirated' },
  { letter: 'ผ', name: 'pho phueng', sound: 'ph — aspirated p' },
  { letter: 'ฝ', name: 'fo fa', sound: 'f' },
  { letter: 'ศ', name: 'so sala', sound: 's' },
  { letter: 'ษ', name: 'so rue-si', sound: 's' },
  { letter: 'ส', name: 'so suea', sound: 's' },
  { letter: 'ห', name: 'ho hip', sound: 'h' },
]

const lowConsonants = [
  { letter: 'ค', name: 'kho khwai', sound: 'kh' },
  { letter: 'ฅ', name: 'kho khon (obsolete)', sound: 'kh' },
  { letter: 'ฆ', name: 'kho ra-khang', sound: 'kh' },
  { letter: 'ง', name: 'ngo ngu', sound: 'ng' },
  { letter: 'ช', name: 'cho chang', sound: 'ch' },
  { letter: 'ซ', name: 'so so', sound: 's' },
  { letter: 'ฌ', name: 'cho choe', sound: 'ch' },
  { letter: 'ญ', name: 'yo ying', sound: 'y' },
  { letter: 'ฑ', name: 'tho montho', sound: 'th' },
  { letter: 'ฒ', name: 'tho phu-thao', sound: 'th' },
  { letter: 'ณ', name: 'no nen', sound: 'n' },
  { letter: 'ท', name: 'tho thahan', sound: 'th' },
  { letter: 'ธ', name: 'tho thong', sound: 'th' },
  { letter: 'น', name: 'no nu', sound: 'n' },
  { letter: 'พ', name: 'pho phan', sound: 'ph' },
  { letter: 'ฟ', name: 'fo fan', sound: 'f' },
  { letter: 'ภ', name: 'pho sam-phao', sound: 'ph' },
  { letter: 'ม', name: 'mo ma', sound: 'm' },
  { letter: 'ย', name: 'yo yak', sound: 'y' },
  { letter: 'ร', name: 'ro ruea', sound: 'r' },
  { letter: 'ล', name: 'lo ling', sound: 'l' },
  { letter: 'ว', name: 'wo waen', sound: 'w' },
  { letter: 'ฬ', name: 'lo chu-la', sound: 'l' },
  { letter: 'ฮ', name: 'ho nok-huk ', sound: 'h' },
]

const groups = [
  { key: 'mid', title: 'Mid Class', items: midConsonants },
  { key: 'high', title: 'High Class', items: highConsonants },
  { key: 'low', title: 'Low Class', items: lowConsonants },
]
</script>

<template>
  <main class="consonants">
    <section class="intro">
      <h1>Thai Consonants</h1>
      <p>
        Thai consonants aren't just sounds — each one belongs to a
        <strong>class</strong> (mid, high, or low), and that class combines with vowel length and
        tone marks to determine the tone of a syllable. Learning the class alongside the letter pays
        off later.
      </p>
      <div class="legend">
        <span class="legend__item"><i class="legend__dot legend__dot--mid"></i>Mid class</span>
        <span class="legend__item"><i class="legend__dot legend__dot--high"></i>High class</span>
        <span class="legend__item"><i class="legend__dot legend__dot--low"></i>Low class</span>
      </div>
    </section>

    <section v-for="group in groups" :key="group.key" class="group">
      <h2 :class="`group__title group__title--${group.key}`">{{ group.title }}</h2>
      <div class="grid">
        <article
          v-for="c in group.items"
          :key="c.letter + c.name"
          class="card"
          :class="`card--${group.key}`"
        >
          <span class="card__letter">{{ c.letter }}</span>
          <span class="card__name">{{ c.name }}</span>
          <span class="card__sound">{{ c.sound }}</span>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.consonants {
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
  margin-bottom: var(--space-2);
}

.intro p {
  line-height: 1.7;
  color: #3a342b;
  margin-bottom: var(--space-3);
}

.legend {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.legend__item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #3a342b;
}

.legend__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.legend__dot--mid {
  background: var(--class-mid);
}
.legend__dot--high {
  background: var(--class-high);
}
.legend__dot--low {
  background: var(--class-low);
}

/* Groups */
.group {
  margin-bottom: var(--space-4);
}

.group__title {
  font-size: 1.4rem;
  margin-bottom: var(--space-2);
  padding-bottom: var(--space-1);
  border-bottom: 2px solid;
}

.group__title--mid {
  border-color: var(--class-mid);
  color: var(--class-mid);
}
.group__title--high {
  border-color: var(--class-high);
  color: var(--class-high);
}
.group__title--low {
  border-color: var(--class-low);
  color: var(--class-low);
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--space-2);
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  border: 2.5px solid;
  padding: var(--space-3) var(--space-2);
  box-shadow: 0 4px 10px rgba(27, 23, 18, 0.12);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.card:hover {
  transform: scale(1.06);
  box-shadow: 0 12px 24px rgba(27, 23, 18, 0.22);
}

.card--mid {
  background: var(--class-mid);
  border-color: var(--class-mid-border);
}

.card--high {
  background: var(--class-high);
  border-color: var(--class-high-border);
}

.card--low {
  background: var(--class-low);
  border-color: var(--class-low-border);
}

.card__letter {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 1;
  color: var(--ink);
  margin-bottom: var(--space-2);
}

.card__name {
  font-size: 0.9rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.15rem;
}

.card__sound {
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 480px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  }

  .card__letter {
    font-size: 2rem;
  }
}
</style>
