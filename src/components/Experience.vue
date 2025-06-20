<template>
  <section id="experiences">
    <div class="main-container">
      <h1>My Experiences</h1>

      <div class="experience">
        <div class="left">
          <h3>Data Intern, SBS Transit Ltd</h3>
          <p>May 2025 - Jul 2025</p>
          <div class="description">
            <p>Description here.</p>
          </div>
        </div>

        <div class="right">
          <img src="../assets/sbst.jpg" alt="">
        </div>
      </div>

      <div class="experience">
        <div class="left">
          <h3>Research Assistant, NUS</h3>
          <p>Sep 2024 - Oct 2024</p>
          <div class="description">
            <p>Description here.</p>
          </div>
        </div>

        <div class="right">
          <img src="../assets/nus.png" alt="">
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* * {
  border: 1px solid red;
} */

.main-container {
  height: 90vh;
  align-content: center;
}

h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 2rem;
}

.experience {
  max-width: 60%;
  margin: auto;
  display: grid;
  grid-template-columns: 70% 30%;
  margin-bottom: 3rem;
}

.experience h3 {
  font-weight: 700;
}

.experience p {
  color: rgb(94, 94, 94)
}

.description {
  margin: 1rem 0;
}

.right {
  display: flex;
  justify-content: center;
}

.right img {
  max-width: 80%;
  object-fit: contain;
}
</style>