//Beehiiv is the newsletter service used here

<template>
  <v-container class="d-flex justify-center my-8">
    <div
      ref="beehiivContainer"
      class="beehiiv-wrapper"
      style="width: 100%; max-width: 600px;"
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
      style="width: 100%; height: 339px; border-radius: 16px; display: block;"
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
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  padding: 0;
  overflow: hidden;
}

.beehiiv-embed {
  border: none;
  border-radius: 16px;
}
</style>
