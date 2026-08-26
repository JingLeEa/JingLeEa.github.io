<template>
  <section id="experiences">
    <div class="main-container">
      <h1 v-animateonscroll="{ enterClass: 'animate-enter fade-in-20 animate-duration-2000' }">My Experiences</h1>

      <div class="experience" v-animateonscroll="{ enterClass: 'animate-enter slide-in-from-r-8 animate-duration-1000' }">
        <div class="left">
          <h3>Business Analyst Intern (Data Engineering & Actuarial Analytics), Munich Re</h3>
          <p id="duration">May 2026 - Present</p>
          <div class="description">
            <p>As a Business Analyst Intern at Munich Re, I built end-to-end data pipelines and AI-powered tools to support actuarial data migration and treaty analysis. 
              My key contributions include engineering a Databricks ETL pipeline using PySpark to transform raw actuarial data into treaty-level datasets of ~40 million rows each, 
              complete with data quality validation and reporting dashboards. 
            </p>
            <p style="margin-top: 0.5rem;">
              I also developed a RAG-based claim classification pipeline using ChromaDB and an in-house LLM to automate insurance claim categorization, 
              and built an LLM-powered document extraction tool to parse unstructured treaty documents into structured data, cutting manual review time from hours to minutes.
            </p>
          </div>
        </div>

        <div class="right">
          <img src="../assets/mr.png" alt="">
        </div>
      </div>

      <div class="experience" v-animateonscroll="{ enterClass: 'animate-enter slide-in-from-l-8 animate-duration-1000' }">
        <div class="left">
          <h3>Data Analyst Intern, Shopee Singapore</h3>
          <p id="duration">Jul 2025 - Dec 2025</p>
          <div class="description">
            <p>As a Data Analyst Intern, I automated data processes and built analytical solutions. My key contributions include engineering KPI dashboards using SQL, Excel and Apps Script to automate metrics aggregation. 
              I also built a Seatalk reminder bot integrated with Google Sheets to automate crucial task reminders for internal stakeholders. 
            </p>
            <p style="margin-top: 0.5rem;">Furthermore, I developed robust ETLT pipelines using Python, PrestoSQL, Hive and SparkSQL to transform complex nested JSON data into insightful dashboards that assess team responsiveness and overall business performance.</p>
          </div>
        </div>
        <div class="right">
          <img src="../assets/shopee.png" alt="">
        </div>
      </div>

      <div class="experience" v-animateonscroll="{ enterClass: 'animate-enter slide-in-from-r-8 animate-duration-1000' }">
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
          <img src="../assets/sbst.png" alt="">
        </div>
      </div>

      <div class="experience" v-animateonscroll="{ enterClass: 'animate-enter slide-in-from-l-8 animate-duration-1000' }">
        <div class="left">
          <h3>Research Assistant, NUS</h3>
          <p id="duration">Sep 2024 - Oct 2024</p>
          <div class="description">
            <p>
              As a Research Assistant at the Department of Information Systems and Analytics in NUS, I supported experimental studies in educational technologies and psychophysiological research. 
              Also, I conducted laboratory experiments with human participants, operated eye-tracking and electrodermal devices, and ensured timely data collection and processing. 
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
  margin-top: 3rem; /* margin bottom in experience */
}

h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  margin-top: 0;
}

.experience {
  max-width: 70%;
  margin: 2rem auto 3rem auto; /* margin bottom incl here*/
  display: grid;
  grid-template-columns: 70% 30%;
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
    margin: 2rem auto 3rem auto;
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

@media (max-width: 1024px) {
  .experience {
    max-width: 80%;
    margin: 2rem auto 3rem auto;
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