<script setup>
</script>

<template>
  <main class="listening">
    <section class="intro">
      <h1>Listening</h1>
      <p>
        Training your ear comes first — before you can say a tone correctly,
        you need to be able to hear the difference between the five of them.
      </p>
    </section>

    <section class="cards">
      <RouterLink to="/listening/tones" class="card">
        <span class="card__eyebrow">5 tones</span>
        <h2>Tones</h2>
        <p>Listen to each of the five Thai tones and see the shape of their pitch contour.</p>
        <span class="card__link">Listen to tones →</span>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.listening {
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
  grid-template-columns: repeat(auto-fit, minmax(260px, 340px));
  gap: var(--space-3);
}

.card {
  display: block;
  background: white;
  border: 1px solid var(--parchment-soft);
  border-radius: var(--radius);
  padding: var(--space-3);
  transition: border-color 0.15s ease, transform 0.15s ease;
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