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
}

video {
  width: 250px;
  height: auto;
  margin: 0.5rem 0;
  border-radius: 100px;
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