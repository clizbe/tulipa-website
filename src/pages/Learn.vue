<template>
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
    <v-row class="flex-nowrap" style="overflow-x: auto">
      <v-col
        v-for="(pdf, index) in pdfs"
        :key="index"
        class="auto"
        style="min-width: 220px;"
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

  <!-- FAQ Section -->
  <v-container class="mx-auto">
    <h1 class="mb-4">FAQ</h1>

    <v-expansion-panels multiple>
      <v-expansion-panel
        v-for="(item, index) in faqs"
        :key="index"
      >
        <v-expansion-panel-title class="text-h6">
          {{ item.question }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          {{ item.answer }}
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

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
    {
      title: 'Tulipa Clustering',
      thumbnail: 'thumbnails/250909_Tulipa_Clustering.png',
      url: 'pdfs/250909_Tulipa_Clustering.pdf',
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
        img.addEventListener('error', resolve)
      })),
    )
  })

  const faqs = [
    {
      question: 'What is Tulipa?',
      answer: 'Tulipa is a modelling framework for analysing future energy systems through investment (capacity expansion) and dispatch (operations) optimisation. The underlying methodology is mixed-integer linear programming (MILP). Tulipa is designed to be flexible, scalable, and performant, making it suitable for a wide range of applications.',
      open: false,
    },
    {
      question: 'How are systems represented in Tulipa?',
      answer: 'Analysts can build energy systems in Tulipa using five generalized building blocks: Production, Consumption, Conversion, Storage, and Transport. These building blocks can be tailored and combined to model complex energy systems. The same system can be modelled in multiple ways depending on the scope of the analysis.',
      open: false,
    },
    {
      question: 'What geographic scope does Tulipa cover?',
      answer: 'The geographic scope depends entirely on the data. You can build an energy system on the moon, if you like.',
      open: false,
    },
    {
      question: 'What energy carriers does it include?',
      answer: 'As a generalized framework, Tulipa can model virtually any energy carrier or commodity - they are defined in the data. Special limitations (constraints) are available for modelling electricity assets.',
      open: false,
    },
    {
      question: 'What size of energy system can it handle?',
      answer: 'Tulipa is built to handle large and detailed systems, but since it is generalized, you can also model small systems. It depends on data. With flexible resolution, you can also model a detailed small system (or asset) inside a larger system.',
      open: false,
    },
    {
      question: 'What technologies are included?',
      answer: 'Tulipa can model virtually all technologies using generalized building blocks: Production, Consumption, Conversion, Storage, and Transport. For instance, a Production asset might be a windfarm or an oil well. A Transport asset could be an electricity cable, a gas pipeline, or a shipping route. Some technological constraints (such as Unit Commitment) even have multiple formulations, so the analyst can choose the appropriate level of detail and computational burden.',
      open: false,
    },
    {
      question: 'What time resolution does it use?',
      answer: 'Tulipa is the only existing model that has fully-flexible temporal resolution. That means different energy carriers, geographic regions, or time horizons can have different temporal resolutions - and they do not have to be multiples of each other. This means the analyst can reduce resolution where unnecessary, and increase it where needed, to get the best balance of accuracy and computational burden.',
      open: false,
    },
    {
      question: 'Does Tulipa do investments?',
      answer: 'Yes, Tulipa includes endogenous investment optimisation.',
      open: false,
    },
    {
      question: 'Does Tulipa do optimal dispatch?',
      answer: 'Yes, Tulipa includes endogenous dispatch optimisation.',
      open: false,
    },
    {
      question: 'Does Tulipa have modelling to generate alternatives (MGA)?',
      answer: 'Almost - we have created NearOptimalAlternatives.jl, but it still needs polishing and integration into the workflow.',
      open: false,
    },
    {
      question: 'Can I use Tulipa for my research?',
      answer: 'Yes, Tulipa is open-source under an Apache 2.0 license. You can download it today by clicking Get Started in the navigation bar.',
      open: false,
    },
  ]
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

</style>
