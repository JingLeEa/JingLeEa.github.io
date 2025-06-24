<script setup>
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Project from './components/Project.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false)

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

function handleScroll() {
  showButton.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <nav>
      <div class="logo">
        Jing Le
      </div>
      <div>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experiences">Experiences</a>
        <a href="#projects">Projects</a>
        <a @click="scrollToTop" style="cursor: pointer;">Contact</a>
      </div>
    </nav>
  </div>
  <Intro/>
  <About/>
  <Skills/>
  <Experience/>
  <Project/>
  <i class="pi pi-arrow-up" :class="{visible: showButton}" @click="scrollToTop"></i>
  <footer>
    <p>© 2025 Jing Le Ea</p>
  </footer>
</template>

<style scoped>
* {
  font-family: "Inter";
  color: black;
  background-color: white;
  /* border: 1px solid red; */
}

nav {
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 0.5rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-size: 1.05rem;
}

.logo {
  float: left;
  padding: 0.5rem;
  margin-left: 1rem;
  font-family: "Italianno";
  font-size: 1.6rem;
}

nav a {
  font-weight: 500;
  color: black;
  text-decoration: none;
  margin-left: 2rem;
  margin-right: 2rem;
}

nav a:hover {
  color: grey;
}

nav a.active {
  color: grey;
}

i {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: rgb(46, 46, 46);
  color: white;
  border: none;
  padding:  1rem;
  cursor: pointer;
  z-index: 1000;
  font-size: 1rem;
  border-radius: 50%;
  /* button fade in */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

i.visible {
  opacity: 1;
  visibility: visible;
}

footer {
  text-align: center;
  margin-bottom: 10px;
}

footer p {
  color: rgb(108, 108, 108);
}

@media (max-width: 768px) {
  nav a {
  font-weight: 500;
  color: black;
  text-decoration: none;
  margin-left: 1rem;
  margin-right: 1rem;
}
}
</style>