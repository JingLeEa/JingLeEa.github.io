<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-left">
        <h1>About Me</h1>
        <p>
          Hi! I’m <span style="font-weight: 700; font-size: 1.5rem; color: #7F27FF">Jing Le</span> — a Year 3 Computing student at the National University of Singapore, 
          majoring in <span style="color: #9F70FD; font-size: 1.25rem; font-weight: 600;">Business Analytics with a minor in Economics</span>. 
        </p>
        <p style="margin-top: 0.5rem;">
          I enjoy working with data to uncover insights, solve problems, and improve everyday experiences, whether through analysis, building dashboards, 
          or designing simple, user-friendly solutions. 
        </p>
        <p style="margin-top: 0.5rem;">Outside of tech, I love drawing, designing, and photography. I’d like to think I have an eye for aesthetics :P, 
          which often shapes how I approach both my creative and technical projects.</p>
      </div>

      <div class="about-right">
        <img src="../assets/nus bza.png">
      </div>
    </div>
  </section>
</template>

<style scoped>
/* * {
  border: 1px solid red;
} */

.about-section {
  /* height: 100vh; */
  padding: 4rem 2rem;
  text-align: center;
}

.container {
  display: grid;
  grid-template-columns: 60% 40%;
  max-width: 80%;
  margin: 0 auto;
  /* gap: 2rem; */
  align-items: center;
}

.about-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-left h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.about-left p {
  text-align: left;
  font-size: 1.1rem;
}

.about-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-right img {
  max-width: 100%;
}
</style>