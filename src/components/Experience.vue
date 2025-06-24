<template>
  <section id="experiences">
    <div class="main-container">
      <h1>My Experiences</h1>

      <div class="experience">
        <div class="left">
          <h3>Data Engineer Intern, SBS Transit Ltd</h3>
          <p id="duration">May 2025 - Jul 2025</p>
          <div class="description">
            <p>As a Data Engineer Intern, I support the maintenance and enhancement of SBS Transit's Data Analytics Platform (DAP),
              which operates on AWS using services like DMS, Glue, Lambda and S3. My role focuses on ensuring the platform's data pipeline run smoothly
              by detailing and validating ingestion logic, transformation workflows and system processes. 
            </p>
            <p style="margin-top: 0.5rem;">I've also contributed to improving data operations by developing Python script to automate and manipulate Excel files stored in S3.</p>
          </div>
        </div>

        <div class="right">
          <img src="../assets/sbst.jpg" alt="">
        </div>
      </div>

      <div class="experience">
        <div class="left">
          <h3>Research Assistant, NUS</h3>
          <p id="duration">Sep 2024 - Oct 2024</p>
          <div class="description">
            <p>
              As a Research Assistant at the Department of Information Systems and Analytics in NUS, I supported experimental studies in educational technologies and psychophysiological research. 
              I conducted laboratory experiments with human participants, operated eye-tracking and electrodermal devices, and ensured timely data collection and processing. 
              I also worked closely with the lead professor to apply new software tools for psychophysiological data collection and analysis.
            </p>
          </div>
        </div>

        <div class="right">
          <img src="../assets/nus.png" alt="">
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
  align-content: center;
  margin-top: 3rem;
}

h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 2rem;
}

.experience {
  max-width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: 70% 30%;
  margin-bottom: 3rem;
  border: 1px solid rgb(167, 167, 167);
  border-radius: 20px;
  padding: 20px;
}

h3 {
  font-weight: 700;
}

p {
  text-align: justify;
}

#duration {
  color: rgb(94, 94, 94);
}

.description {
  margin: 1rem 0;
}

.right {
  display: flex;
  justify-content: center;
}

.right img {
  max-width: 80%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .experience {
    max-width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    border: 1px solid rgb(167, 167, 167);
    border-radius: 20px;
    padding: 20px;
  }

  .right {
    display: flex;
    justify-content: center;
  }

  .right img {
    max-width: 30%;
    max-height: 60px;
    object-fit: contain;
    margin-top: 5px;
  }
}
</style>