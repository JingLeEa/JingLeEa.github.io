<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-left">
        <h1>About Me</h1>
        <p>
          I'm a Year 3 computing student at National University of Singapore (NUS), majoring in Business Analytics and minoring in Economics. 
          I'm passionate in .... I enjoy ....
        </p>
      </div>
      <div class="about-right">
        <img src="../assets/me2.jpg">
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
  grid-template-columns: 65% 35%;
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
}

.about-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-right img {
  max-width: 80%;
}
</style>