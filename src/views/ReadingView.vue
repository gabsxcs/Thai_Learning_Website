<script setup></script>

<template>
  <main class="reading">
    <section class="intro">
      <h1>Reading</h1>
      <p>
        Thai script has its own consonants, vowels, and tone marks — none of them borrowed from the
        Latin alphabet. Start with the building blocks: the 44 consonants and their classes, then
        the vowel sounds that combine with them.
      </p>
    </section>

    <section class="cards">
      <RouterLink to="/reading/consonants" class="card">
        <span class="card__eyebrow">44 letters</span>
        <h2>Consonants</h2>
        <p>Learn every Thai consonant, grouped and color-coded by class — mid, high, or low.</p>
        <span class="card__link">Browse consonants →</span>
      </RouterLink>

      <RouterLink to="/reading/vowels" class="card">
        <span class="card__eyebrow">32 vowels</span>
        <h2>Vowels</h2>
        <p>
          Compare short and long vowel pairs side by side, plus the special symbols that break the
          pattern.
        </p>
        <span class="card__link">Browse vowels →</span>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.reading {
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
  line-height: 1.7;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.card {
  display: block;
  background: white;
  border: 1px solid var(--parchment-soft);
  border-radius: var(--radius);
  padding: var(--space-3);
  transition:
    border-color 0.15s ease,
    transform 0.15s ease;
}

.card:hover {
  border-color: var(--teal);
  transform: translateY(-2px);
}

.card__eyebrow {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--marigold);
}

.card h2 {
  font-size: 1.4rem;
  margin: 0.4rem 0 0.6rem;
}

.card p {
  color: #55503f;
  line-height: 1.6;
  margin: 0 0 var(--space-2);
}

.card__link {
  font-weight: 600;
  color: var(--teal);
}

@media (max-width: 720px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
