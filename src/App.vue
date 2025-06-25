<script setup>
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Project from './components/Project.vue';
import { ref, onMounted, onUnmounted, watch } from 'vue';

const showButton = ref(false)
const isDarkMode = ref(false)

watch(isDarkMode, (newVal) => {
  if (newVal) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
})

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
  <div class="nav-bar">
    <nav>
      <div class="logo">
        Jing Le
      </div>
      <div class="nav-menu">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experiences">Experiences</a>
        <a href="#projects">Projects</a>
        <a @click="scrollToTop" style="cursor: pointer;">Contact</a>
        <button class="theme-toggle" @click="isDarkMode = !isDarkMode">
          <i :class="isDarkMode ? 'pi pi-moon' : 'pi pi-sun'"></i>
        </button>
      </div>
    </nav>
  </div>
  <Intro :isDarkMode="isDarkMode" />
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
  border: 1px solid red;
}

nav {
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 0.5rem;
  background-color: var(--color-background);
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

nav a, .theme-toggle {
  font-weight: 500;
  color: var(--color-text);
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

.theme-toggle {
  background-color: var(--color-background);
  font-size: 1.1rem;
  border: none;
  color: inherit;
  cursor: pointer;
}

.pi-arrow-up {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: rgb(46, 46, 46);
  color: var(--color-background);
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

.pi-arrow-up.visible {
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

@media (max-width: 1024px) {
  .logo {
    margin-left: 0.2rem;
  }

  nav a, .theme-toggle {
    font-weight: 500;
    color: var(--color-text);
    text-decoration: none;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
  }

  .theme-toggle {
    margin-right: 0.6rem;
  }
}

@media (max-width: 576px) {
  .logo {
    margin-left: 0.1rem;
  }

  /* nav a, .theme-toggle {
    font-weight: 500;
    color: var(--color-text);
    text-decoration: none;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-size: 0.9rem;
  } */

  /* .theme-toggle {
    margin-right: 0;
  } */
  nav {
    display: none;
  }
}
</style>