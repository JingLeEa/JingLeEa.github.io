<script setup>
import ImgCarousel from './ImgCarousel.vue';

const project1Images = [
  new URL('@/assets/ceremony.jpeg', import.meta.url).href,
  new URL('@/assets/me2.jpg', import.meta.url).href,
  new URL('@/assets/me.jpg', import.meta.url).href,
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
            Using Python (Pandas, NumPy), we performed data cleaning, transformation, and loading into a structured database. 
            Exploratory analysis was conducted with Seaborn, and the final dataset was used to train a blended LightGBM and XGBoost
            model to predict housing prices and identify key price drivers.
          </p>
        </div>
      </div>

      <div class="project">
        <div class="left">
          <ImgCarousel :images="project1Images" />
        </div>
        <div class="right">
          <h3>Spotless, SBS Transit Hackathon</h3>
          <p>SBS Spotless is a comprehensive fleet management solution developed for SBS Hackathon 2024, which allows bus operators to manage the cleanliness 
            of SBS's bus fleet with features such as cleanliness checklist assigning, AI powered cleanliness verification system, QR based feedback collection system, 
            data visualization tools etc.</p>
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
}

.right {
  margin: 1rem 3rem;
}

.right p {
  margin-bottom: 8px;
}

h3 {
  font-weight: 700;
  margin-bottom: 8px;
}

</style>