<template>
  <!--
  Point to -> Technical Docs, Tutorials, etc
  FAQ
  Videos
  Publications
  X Posters
  TulipaLearningCommunity
  -->

<!-- FAQ Section -->
  <div class="faq-container">
    <h1 class="faq-title"></h1>
    <ul class="faq-list">
      <!-- FAQ items will go here -->
    </ul>
  </div>

<!-- Posters Section -->
<v-container>
    <h1 class="mb-4">Posters</h1>
    <v-row>
      <v-col
        v-for="(pdf, index) in pdfs"
        :key="index"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card
          @click="openPDF(pdf.url)"
          class="pdf-preview"
          elevation="2"
          hover
        >
          <v-img
            :src="pdf.thumbnail"
            height="300"
            position="top"
            cover
          ></v-img>
          <v-card-title class="text-subtitle-1">{{ pdf.title }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
  const pdfs = [
    {
      title: 'Overview',
      thumbnail: 'thumbnails/Poster1_HighLevel.png',
      url: 'pdfs/250319_Poster1_HighLevel.pdf'
    },
    {
      title: 'Analysis Pipeline',
      thumbnail: 'thumbnails/Poster2_AnalysisPipeline.png',
      url: 'pdfs/250319_Poster2_AnalysisPipeline.pdf'
    },
    {
      title: 'Key Research',
      thumbnail: 'thumbnails/Poster3_Research.png',
      url: 'pdfs/250319_Poster3_Research.pdf'
    },
    {
      title: 'Software Overview',
      thumbnail: 'thumbnails/Poster4_Packages.png',
      url: 'pdfs/250319_Poster4_Packages.pdf'
    },
  ]

  const openPDF = (url) => {
    window.open(url, '_blank')
  }
</script>

<style scoped>

  .pdf-preview {
    cursor: pointer;
    transition: transform 0.2s;
  }

  .pdf-preview:hover {
    transform: scale(1.02);
  }

  .faq-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  .faq-title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .faq-list {
    list-style: none;
    padding: 0;
  }
</style>
