//Beehiiv is the newsletter service used here

<template>
  <v-container class="d-flex justify-center my-2" style="padding: 0;">
    <div
      ref="beehiivContainer"
      class="beehiiv-wrapper"
    ></div>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const beehiivContainer = ref(null)

onMounted(() => {
  beehiivContainer.value.innerHTML = `
    <iframe
      src="https://subscribe-forms.beehiiv.com/dba2574f-e42e-4824-8c5e-4c1478ef8c33"
      class="beehiiv-embed"
      frameborder="0"
      scrolling="no"
      style="width: 100%; height: 339px; display: block; background-color: white;"
    ></iframe>
  `

  const script = document.createElement('script')
  script.src = 'https://subscribe-forms.beehiiv.com/embed.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<style scoped>
.beehiiv-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 1rem;
}

.beehiiv-embed {
  border: none;
  border-radius: 0;
}
</style>
