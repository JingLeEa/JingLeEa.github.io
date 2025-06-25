<script setup>
import AnimateOnScroll from 'primevue/animateonscroll'
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-left">
        <h1 v-animateonscroll="{ enterClass: 'animate-enter fade-in-20 animate-duration-1000' }">About Me</h1>

        <!-- Image for mobile -->
        <div class="about-right mobile-img" v-animateonscroll="{ enterClass: 'animate-enter fade-in-20 animate-duration-1500' }">
          <img src="../assets/nus bza.png" alt="Profile" />
        </div>

        <p v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000' }">
          Hi! I’m <span id="my-name">Jing Le</span> — a Year 3 Computing student at the National University of Singapore, 
          majoring in <span id="my-course">Business Analytics with a minor in Economics</span>. 
        </p>
        <p style="margin-top: 0.5rem;" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000' }">
          I enjoy working with data to uncover insights, solve problems, and improve everyday experiences, whether through analysis, building dashboards, 
          or designing simple, user-friendly solutions. 
        </p>
        <p style="margin-top: 0.5rem;" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000' }">
          Outside of tech, I love drawing, designing, and photography. I’d like to think I have an eye for aesthetics :P, 
          which often shapes how I approach both my creative and technical projects. <i>Side note, I designed and built this website from scratch with Vue js!</i></p>
      </div>

      <!-- Image for desktop -->
      <div class="about-right desktop-img" v-animateonscroll="{ enterClass: 'animate-enter fade-in-20 slide-in-from-r-8 animate-duration-1500' }">
        <img src="../assets/nus bza.png" alt="Profile" />
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
  padding: 0.5rem 2rem 3rem 2rem;
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
  text-align: justify;
  font-size: 1.1rem;
}

.about-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

#my-name {
  font-weight: 700;
  font-family: "Delicious Handrawn", cursive;
  font-size: 1.5rem;
  color: #7F27FF
}

#my-course {
  color: #9F70FD; 
  font-family: "Cascadia Code", sans-serif; 
  font-weight: 600;
}

.about-right img {
  max-width: 100%;
  display: block;
}

.mobile-img {
  display: none;
}

@media (max-width: 768px) {
  .container {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .desktop-img {
    display: none;
  }

  .mobile-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 1.5rem;
    max-width: 70%;

  }
}
</style>