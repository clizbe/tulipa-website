<template>
  <v-container class="mx-auto" max-width="900" style="border-radius: 16px; padding: 2rem;">
    <v-row class="pa-4">
      <v-col
        v-for="(item, index) in feature_list"
        :key="index"
        cols="12"
        md="6"
      >
        <v-list lines="two" style="background-color: transparent;">
          <v-list-item
            class="wrapped-subtitle"
            prepend-icon="mdi-check-circle-outline"
            style="background-color: transparent;"
            :subtitle="item.subtitle"
            :title="item.title"
          />
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  const feature_list = [
    {
      title: 'Investment Optimisation',
      subtitle: 'Expand and compare future energy systems to meet demands at the lowest societal cost.',
    },
    {
      title: 'Dispatch Optimisation',
      subtitle: 'Optimize operations of energy systems to assess policy impacts.',
    },
    {
      title: 'All Technologies',
      subtitle: 'Configure any technology with specific limits and behavior - for a more realistic system.',
    },
    {
      title: 'All Energy Carriers and Materials',
      subtitle: 'Electricity, gas, hydrogen, heat, biomass, plastic, apples, you name it.',
    },
    {
      title: 'Any Geographical Area',
      subtitle: 'Build any regional, national, or continental system - it all depends on data.',
    },
    {
      title: 'Mixed Levels of Detail',
      subtitle: 'Zoom-in on the area of interest, while keeping the rest in scope.',
    },
    {
      title: 'Complex Processes',
      subtitle: 'Model virtually any process using multi-input, multi-output conversion assets.',
    },
    {
      title: 'Short and Long-term storage',
      subtitle: 'Bring long-term storage to day-ahead markets to compete with other options.',
    },
    {
      title: 'Multi-year Transition Pathways',
      subtitle: 'Find and compare optimal transition pathways for the coming decades.',
    },
    {
      title: 'Generalized Assets',
      subtitle: 'Model any system using Producers, Consumers, Storage, Converters, and Flows.',
    },
  ]
</script>

<style scoped>
.wrapped-subtitle :deep(.v-list-item-title),
.wrapped-subtitle :deep(.v-list-item-subtitle) {
  white-space: normal !important;
  overflow-wrap: break-word !important;
  word-break: break-word !important;
  color: rgb(var(--v-theme-on-background)) !important;
}
</style>
