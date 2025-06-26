<template>
  <section id="skills">
    <div class="main-container">

      <h1 v-animateonscroll="{ enterClass: 'animate-enter fade-in-20 animate-duration-2000' }">My Skills</h1>

      <div class="skill-category">

        <h2 v-animateonscroll="{ enterClass: 'animate-enter fade-in-20 animate-duration-2000' }">Data Analytics and Visualization</h2>

        <div class="skills-grid">

          <div class="item" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-600' }">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
            <span>Python</span>
          </div>

          <div class="item" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-800' }">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />
            <span>Pandas</span>
          </div>

          <div class="item" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-1000' }">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg" />
            <span>R</span>
          </div>

          <div class="item" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-1200' }">
            <img src="../assets/excel.png" alt="">
            <span>Excel</span>
          </div>

          <div class="item" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-1400' }">
            <img src="../assets/tableau.png" alt="">
            <span>Tableau</span>
          </div>

          <div class="item" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-1600' }">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
            <span>MySQL</span>
          </div>

          <div class="item" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-1800' }">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
            <span>PostgreSQL</span>
          </div>

          <div class="item" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-2000' }">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" />
            <span>Matplotlib</span>
          </div>
        </div>
      </div>
      <br>
      <div class="skill-category">
        <h2 v-animateonscroll="{ enterClass: 'animate-enter fade-in-20 animate-duration-2000' }">Web Development</h2>

        <div class="skills-grid">

          <div class="item" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-600' }">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
            <span>HTML</span>
          </div>

          <div class="item" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-800' }">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            <span>CSS</span>
          </div>

          <div class="item" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-1000' }">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <span>JavaScript</span>
          </div>

          <div class="item" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-1200' }">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />
            <span>Vue js</span>
          </div>

          <div class="item" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-1400' }">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
            <span>Firebase</span>
          </div>

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
  text-align: center;
  min-height: fit-content;
  align-content: center;
  margin: 3rem 0 5rem 0;
}

h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  margin-top: 0;
}

h2 {
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 2rem;
}

.skills-grid {
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.item {
  padding: 1rem 1.5rem 0rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item span {
  font-weight: 500;
}

.item img{
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin: 10px 0;
  transition: ease 0.3s;
}

.item img:hover {
  transform: scale(1.11);
  transition: ease 0.3s;
}

@media (max-width: 768px) {
  .main-container {
    min-height: fit-content;
    text-align: center;
    align-content: center;
    margin-top: 3rem;
    margin-bottom: 5rem;
  }

  .item {
    padding: 0.4rem 1rem 0 1rem;
  }

  h2 {
    margin-top: 1rem;
  }
}

@media (max-width: 576px) {

}
</style>