<template>
  <!--
   Why build a new model?
    We saw a new way of energy system modelling, one that would be nearly impossible to implement in a current model – better to start fresh. While new features can be added to existing models, Tulipa is built differently from the foundation upwards.
   XPartners, Team
   XFinance
   Mailing List?
   Contact
  -->
  <v-container class="mx-auto" max-width="900">
    <div class="mt-14 mb-8 text-center">
      <h1 class="text-h3 font-weight-bold">
        Why build a new model?
      </h1>
      <div class="my-8" />
      <p>
        A new approach to energy system modelling required a fresh start. Tulipa is built
        with a focus on scalability to large, complex systems. Adding features is easy, but adding
        features that can scale to large systems and remain solvable is hard. Every feature we add to Tulipa is designed and tested width
        scalability in mind. To implement this structure in an existing model would have required
        a complete overhaul of the codebase, so we decided to start from scratch.
      </p>
    </div>
  </v-container>

  <v-container class="mx-auto" max-width="1500">
    <div class="ma-10 mb-8 text-center">
      <h1 class="text-h3 font-weight-bold">
        Meet the Team
      </h1>
    </div>

    <v-row>
      <v-col cols="12" md="4">
        <v-card
          subtitle="Leading formulation quality"
          text="At the Netherlands Organisation for Applied Scientific Research (TNO), we bridge the gap between academic research and real-world application. Our team’s expertise is in the mathematical basis of energy system optimisation. We also have a pulse on the real-world questions that are still unanswered and what modelling capability is needed to answer them, so we’re leading the fundamental research."
          title="TNO"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-card
          subtitle="Leading software quality"
          text="The Netherlands eScience Center is an organisation focused on improving the quality of code produced by researchers to make it more useful and maintainable beyond the scope of the research. The expertise of eScience has been vital to making Tulipa’s code as performant as the formulations – as well as tested, documented, modular, and all the other benefits of proper software engineering."
          title="The Netherlands eScience Center"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-card
          subtitle="Supporting research innovation"
          text="TUDelft and Utrecht University are two technical engineering universities in the Netherlands. Our post-doc, Phd candidates, and MSc students work with the experts from TNO to develop formulations that are efficient, accurate, and scalable to large-scale models. Once complete, their research is incorporated into Tulipa to support real-world analyses in the energy transition."
          title="TU Delft & Utrecht University"
        />
      </v-col>
    </v-row>

  </v-container>

</template>
