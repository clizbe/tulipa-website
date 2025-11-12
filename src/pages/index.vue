<template>
  <!--
  XFeatures
  Applications?
  Why Tulipa
  Unit Day video(?) but cleaner and less aggressive?
  Mailing list?
  Packages?
  -->
  <v-container class="mx-auto" max-width="1500">
    <div>
      <v-img
        class="ma-10"
        height="250"
        src="/logos/logo.png"
      />

      <div class="mb-8 text-center">
        <h1 class="text-h3 font-weight-bold">
          Tulipa is an open-source framework <br> for analyzing energy systems.
        </h1>
      </div>
    </div>
  </v-container>

  <v-container class="mx-auto" max-width="900" style="background-color: #31193bff; border-radius: 16px; padding: 2rem;">
    <div class="mt-14 mb-8 text-center">
      <h1 class="text-h3 font-weight-bold">
        Why choose Tulipa?
      </h1>
      <div class="my-8"></div>
      <p>
        Tulipa is designed for modelling large and complex energy systems, without sacrificing accuracy.
        While other models may have more features, adding these features to large-scale systems often makes them unsolvable.
        Tulipa focuses on efficient mathematical formulations and flexible features that keep the problem size manageable -
        so you can include more of the details that you need, without running into computational limits.
        <br>  </br>
        <br>  </br>
        Tulipa is <b>not</b> suited for power system analyses with microsecond resolution, nor for real-time control applications. Also, Tulipa focuses more on performance than user-friendliness,
        so novice users may have difficulty. But we are continuously working to improve the documentation and transparency of the model.
      </p>
      </div>
  </v-container>

  <Features/>

  <NewsletterSignup/>

</template>

<script setup>
import Features from '@/components/Features.vue'
import NewsletterSignup from '@/components/NewsletterSignup.vue'

</script>
