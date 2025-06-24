<script setup>
import ImgCarousel from './ImgCarousel.vue';

const project1Images = [
  new URL('@/assets/etlt1.png', import.meta.url).href,
  new URL('@/assets/etlt2.png', import.meta.url).href,
]

const project2Images = [
  new URL('@/assets/spotless_ss.jpg', import.meta.url).href,
  new URL('@/assets/ceremony.jpeg', import.meta.url).href,
]

const project3Images = [
  new URL('@/assets/portwell.png', import.meta.url).href,
  new URL('@/assets/portwell2.jpg', import.meta.url).href,
]

const project4Images = [
  new URL('@/assets/stucado3.png', import.meta.url).href,
  new URL('@/assets/stucado1.png', import.meta.url).href,
  new URL('@/assets/stucado2.png', import.meta.url).href,
]
</script>

<template>
  <section id="projects">
    <div class="main-container">
      <h1>My Projects</h1>
      
      <div class="project">

        <div class="left">
          <ImgCarousel :images="project1Images" />
        </div>
        
        <div class="right">
          <h3>Housing Analysis Pipeline Project (Data Engineering)</h3>
          <p>As part of a data engineering module, my team and I built a modular ETLT pipeline using Apache Airflow, Docker, 
            and PostgreSQL to collect and process Singapore housing data to analyze housing price trends in Singapore. 
          </p>
          <p>
            The pipeline integrates real-world datasets from HDB and URA APIs, macroeconomic indicators, and PropertyGuru listings via web scraping.
          </p>
          <p>
            Using Python (Pandas), we performed data cleaning, transformation, and loading into a structured database. 
            Exploratory analysis was conducted with Seaborn, and the final dataset was used to train a blended LightGBM and XGBoost
            model to predict housing prices and identify key price drivers.
          </p>

          <div class="tools">
            <span>Python</span> <span>Pandas</span> <span>Seaborn</span> <span>ML</span> <span>Apache Airflow</span> <span>PostgreSQL</span>
          </div>
        </div>
      </div>

      <div class="project">

        <div class="left">
          <ImgCarousel :images="project2Images" />
        </div>

        <div class="right">
          <h3>Spotless, SBS Transit Hackathon</h3>
          <p>SBS Spotless is a comprehensive fleet management solution developed for SBS Hackathon 2024, which allows bus operators to manage the cleanliness 
            of SBS's bus fleet with features such as cleanliness checklist assigning, AI powered cleanliness verification system, QR based feedback collection system, 
            and data visualization tools.</p>

          <div class="tools">
            <span>JavaScript</span> <span>Figma</span> <span>Project Management</span> <span>UI/UX</span>
          </div>
        </div>
      </div>

      <div class="project">

        <div class="left">
          <ImgCarousel :images="project3Images" />
        </div>

        <div class="right">
          <h3>PortWell, PSA Hackathon</h3>
          <p>PortWell is a mental wellness and upskilling platform designed to support PSA’s workforce by promoting employee well-being and continuous growth. </p>
          <p>Developed during the PSA Code Sprint 2024, the project placed in the Top 15 out of nearly 100 teams and earned a Commendation Prize. </p>
          <p>As the Product Manager and UI/UX Designer, I led the product vision, designed the user interface, and structured the feature flow. 
            The platform, built with React, Ruby on Rails, and PostgreSQL, includes an AI-powered chatbot, an AI-driven workshop recommendation system, an integrated calendar, 
            a company forum, and a real-time HR dashboard for tracking team well-being and engagement. </p>

          <div class="tools">
            <span>Figma</span> <span>Project Management</span> <span>UI/UX</span>
          </div>
        </div>
      </div>

      <div class="project">

        <div class="left">
          <ImgCarousel :images="project4Images" />
        </div>

        <div class="right">
          <h3>Stucado, NUS Orbital Project</h3>
          <p>Stucado is a data-driven productivity tool tailored for university students, created for NUS Orbital 23/24 at the Apollo (advanced) level. 
            The platform helps students manage academic workloads through personalized study insights and productivity tracking.</p>
          <p> As the Back-End Developer, I built a custom machine learning model to predict user productivity and provide tailored recommendations for better time management. 
            Stucado features include task prioritization, NUSMods timetable integration, an adaptive Pomodoro timer, and visual progress tracking through heatmaps and graphs. </p>

          <div class="tools">
            <span>JavaScript</span> <span>Machine Learning</span> <span>Figma</span>
          </div>
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
  margin: 3rem 0;
}

h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 2rem;
}

.project {
  max-width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 40% 60%;
  margin-bottom: 3rem;
}

.left {
  max-width: 100%;
  margin: auto 0;
}

.right {
  padding: 1rem;
  /* remove border comment code below */
  margin: 0 1rem;
  border: 1px solid;
  border-radius: 20px;
  margin-top: 0.75rem;
}

.right p {
  margin-bottom: 8px;
}

h3 {
  font-weight: 700;
  margin-bottom: 8px;
}

.tools {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

span {
  padding: 4px 8px;
  background-color: rgb(216, 237, 255);
  border: 1px solid rgb(179, 195, 210);
  border-radius: 20px;
}

@media (max-width: 1024px) {
  .project {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .left {
    max-width: 75%;
    margin-bottom: 1rem;
  }
}

</style>