<script>
</script>

<template>
  <section id="landing">
    <h1>Hello, I’m Ea Jing Le! 👋</h1>
    <video src="../assets/memoji.mov" autoplay loop muted></video>
    <p id="interest">I have interest in Data Analytics, Data Engineering and Machine Learning.</p>
    <br>
    <p>Welcome to my personal page!</p>
    <div>
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
* {
  border: 1px solid red;
}

#landing {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-weight: 900;
  font-size: 2.5rem;
  margin-top: 2rem;
}

video {
  width: 300px;
  height: auto;
  margin: 1rem 0;
  border-radius: 120px;
}

#interest {
  font-weight: 700;
  font-size: 1.2rem;
}

img {
  width: 48px;
  margin: 2rem;
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