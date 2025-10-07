<template>
  <v-container>
    <v-row class="mx-auto" max-width="1200" dense>
      <v-col v-for="link in links" :key="link.href" cols="6">
        <v-card
          append-icon="mdi-github"
          class="py-4"
          color="surface-variant"
          :href="link.href"
          :prepend-icon="link.icon"
          rel="noopener noreferrer"
          rounded="lg"
          :subtitle="link.subtitle"
          target="_blank"
          :title="link.title"
          variant="tonal"
        >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  const links = [
    {
      href: 'https://vuetifyjs.com/',
      icon: 'mdi-text-box-outline',
      subtitle: 'Learn about all things Vuetify in our documentation.',
      title: 'TulipaEnergyModel.jl',
    },
    {
      href: 'https://vuetifyjs.com/introduction/why-vuetify/#feature-guides',
      icon: 'mdi-star-circle-outline',
      subtitle: 'Explore available framework Features.',
      title: 'TulipaClustering.jl',
    },
    {
      href: 'https://vuetifyjs.com/components/all',
      icon: 'mdi-widgets-outline',
      subtitle: 'Discover components in the API Explorer.',
      title: 'Components',
    },
    {
      href: 'https://discord.vuetifyjs.com',
      icon: 'mdi-account-group-outline',
      subtitle: 'Connect with Vuetify developers.',
      title: 'Community',
    },
  ]
</script>
