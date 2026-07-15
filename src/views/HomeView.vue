<template>
  <section class="hero">
    <img
      src="../assets/img/thaaiwallpaper.jpg"
      alt="Thai temple"
      class="hero__image"
    />
    <div class="hero__overlay"></div>
    <div class="hero__content">
      <h1>Learning Thai</h1>
      <p>
        Learn Thai from scratch with simple lessons, tone practice, and
        interactive exercises.
      </p>
      <RouterLink to="/listening/tones" class="hero__button">
        Get Started
      </RouterLink>
    </div>
  </section>

  <main class="home">
    </main>
</template>

<style scoped>
.home {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--space-3);
}

.hero {
  position: relative;
  width: 100%; 
  height:  92.5dvh; 
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.5rem;
}

.hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 700px;
  padding: 0 var(--space-3);
  padding: 0 1.5rem; 
}

.hero__content h1 {
  font-size: clamp(2.5rem, 8vw, 5.5rem);
  margin-bottom: var(--space-2);
  font-family: var(--font-display);
}

.hero__content p {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: var(--space-3);
}

.hero__button {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 999px;
  background: var(--teal);
  color: white;
  font-weight: 600;
  transition: background 0.25s ease, transform 0.25s ease;
  text-decoration: none; 
}

.hero__button:hover {
  background: var(--teal-deep);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero {
    min-height: 100vh; 
  }

  .hero__content p {
    font-size: 1.05rem;
    line-height: 1.5;
    margin-bottom: 2rem; 
  }

  .hero__button {
    padding: 0.875rem 1.75rem; 
    width: 100%; 
    max-width: 300px; 
  }
}
</style>