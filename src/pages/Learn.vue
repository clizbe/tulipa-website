<template>
  <!-- FAQ Section -->
  <div class="faq-container" />

  <!-- Video Section -->
  <v-container class="mx-auto">
    <h1 class="mb-4">Videos</h1>
    <v-row>
      <v-col
        v-for="(video, index) in videos"
        :key="index"
        cols="12"
        md="6"
      >
        <div class="video-wrapper">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            frameborder="0"
            :src="`https://www.youtube.com/embed/${video.videoId}`"
            title="YouTube video player"
          />
          <p class="video-title">{{ video.title }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <!-- Posters Section -->
  <v-container>
    <h1 class="mb-4">Posters</h1>
    <v-row>
      <v-col
        v-for="(pdf, index) in pdfs"
        :key="index"
        cols="12"
        md="3"
        sm="6"
      >
        <v-card
          class="pdf-preview"
          elevation="2"
          hover
          @click="openPDF(pdf.url)"
        >
          <v-img
            cover
            height="300"
            loading="eager"
            position="top"
            :src="pdf.thumbnail"
          />
          <v-card-title class="text-subtitle-1">{{ pdf.title }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { onBeforeMount } from 'vue'

  const videos = [
    {
      title: 'The art of creating fast and reliable energy models | Germán Morales | PyPSA Community',
      videoId: 'Zij0eXfejbE',
    },
    {
      title: 'TulipaEnergyModel.jl - Tooling for the energy transition | Lauren Clisby | JuliaCon Local Paris',
      videoId: 'VOvNblt07HQ',
    },
  ]

  const pdfs = [
    {
      title: 'Overview',
      thumbnail: 'thumbnails/Poster1_HighLevel.png',
      url: 'pdfs/250319_Poster1_HighLevel.pdf',
    },
    {
      title: 'Analysis Pipeline',
      thumbnail: 'thumbnails/Poster2_AnalysisPipeline.png',
      url: 'pdfs/250319_Poster2_AnalysisPipeline.pdf',
    },
    {
      title: 'Key Research',
      thumbnail: 'thumbnails/Poster3_Research.png',
      url: 'pdfs/250319_Poster3_Research.pdf',
    },
    {
      title: 'Software Overview',
      thumbnail: 'thumbnails/Poster4_Packages.png',
      url: 'pdfs/250319_Poster4_Packages.pdf',
    },
  ]

  function openPDF (url) {
    window.open(url, '_blank')
  }
  onBeforeMount(async () => {
    await Promise.all(
      pdfs.map(p => new Promise(resolve => {
        const img = new Image()
        img.src = p.thumbnail
        img.addEventListener('load', resolve)
        img.onerror = resolve // in case an image fails
      })),
    )
  })
</script>

<style scoped>
.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.video-title {
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 500;
}

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
