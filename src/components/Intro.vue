<script>
</script>

<template>
  <section id="landing">
    <div class="header">
      <h1>Hello, I’m Ea Jing Le!</h1>
      <img src="@/assets/wave.png">
    </div>
    
    <video src="../assets/memoji.mov" autoplay loop muted></video>
    <p id="interest">I have an interest in Data Analytics, Data Engineering and Machine Learning.</p>
    <br>
    <p id="welcome">Welcome to my personal page!</p>
    <div class="contact">
      <a href="https://www.linkedin.com/in/jingleea/" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
      </a>
      <a href="https://github.com/JingLeEa" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  margin-top: 2rem;
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

#interest {
  font-weight: 700;
  font-size: 1.35rem;
}

#welcome {
  font-size: 1.1rem;
}

.contact {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.contact img {
  width: 3.5rem;
  height: auto;
}

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
</style>