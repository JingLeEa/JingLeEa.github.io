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
      <img src="../assets/linkedin.png">
      <img src="../assets/github.png">
      <img src="../assets/email.png">
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
</style>