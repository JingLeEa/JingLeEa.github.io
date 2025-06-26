<script setup>
const props = defineProps({
  isDarkMode: {
    type: Boolean,
    required: true
  }
})

const lightMemoji = new URL('@/assets/Memoji.mov', import.meta.url).href
const darkMemoji = new URL('@/assets/Memoji_dark.mov', import.meta.url).href

const lightMemojiimg = new URL('@/assets/memoji.jpg', import.meta.url).href
const darkMemojiimg = new URL('@/assets/memoji_dark.jpg', import.meta.url).href
</script>

<template>
  <section id="landing">
    <div class="header">
      <h1>Hi, I’m Ea Jing Le!</h1>
      <img src="@/assets/wave.png">
    </div>
    
    <video
      v-show="!isDarkMode"
      :src="lightMemoji"
      autoplay
      loop
      muted
    ></video>

    <video
      v-show="isDarkMode"
      :src="darkMemoji"
      autoplay
      loop
      muted
    ></video>

    <!-- display when on phone -->
    <img class="memoji" v-show="isDarkMode" :src="darkMemojiimg">
    <img class="memoji" v-show="!isDarkMode" :src="lightMemojiimg">

    <p id="interest">I have an interest in Data Analytics, Data Engineering and Machine Learning.</p>
    <br>
    <p id="welcome">Welcome to my personal page! <br> <i>Feel free to contact me via:</i></p>
    <div class="contact">
      <a href="https://www.linkedin.com/in/jingleea/" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
      </a>
      <a href="https://github.com/JingLeEa" target="_blank">
        <i id="github" :class="isDarkMode ? 'devicon-github-original' : 'devicon-github-original colored'"></i>
        <!-- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" /> -->
      </a>
      <a href="mailto:eajingle@u.nus.edu"><img src="../assets/email.png"></a>
    </div>
  </section>
</template>

<style scoped>
/* * {
  border: 1px solid red;
} */

#landing {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 90% 10%;
}

.header img {
  width: 45px;
  margin-left: auto;
  margin: auto 0;
}

h1 {
  font-weight: 900;
  font-size: 2.5rem;
  margin: 0 0.5rem;
}

video {
  width: 300px;
  height: auto;
  margin: 1rem 0;
  border-radius: 120px;
}

.memoji {
  display: none;
}

#interest {
  font-weight: 700;
  font-size: 1.35rem;
  max-width: 80%;
  text-align: center;
}

#welcome {
  font-size: 1.1rem;
  text-align: center;
}

.contact {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

/* .contact img {
  width: 3.5rem;
  height: auto;
} */

a {
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
  border: none;
}

a img {
  width: 60px;
  height: 60px;
  display: block;
}

#github {
  font-size: 60px;
}

@media (max-width: 576px) {
  .header {
    margin-top: 3rem;
    display: flex;
  }
  .header img {
    display: none;
  }

  video {
    display: none;
  }

  .memoji {
    display: block;
    width: 250px;
    height: auto;
    margin: 1rem 0;
    border-radius: 120px;
  }
}
</style>