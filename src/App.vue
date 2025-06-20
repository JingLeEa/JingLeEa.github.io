<script setup>
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
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
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </div>
  <Intro/>
  <About/>
  <Skills/>
  <Experience/>
</template>

<style scoped>
* {
  font-family: "Inter";
  color: black;
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
}

.logo {
  float: left;
  padding: 0.5rem;
  margin-left: 1rem;
  font-family: "Italianno";
  font-size: 1.52rem;
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

nav a:active {
  color: grey;
}

</style>