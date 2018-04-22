<template>
  <v-card-actions>
    <v-btn v-if="$store.state.wizardStep > 1" @click="backStep()" round color="primary" outline>Back</v-btn>
    <v-btn v-if="$store.state.wizardStep < $store.state.wizardMax" @click="nextStep()" round color="primary" depressed>Next</v-btn>
    <v-btn v-else round color="primary" depressed>Submit</v-btn>
  </v-card-actions>
</template>

<script>
export default {
  methods: {
    nextStep () {
      this.$store.dispatch('wizardNext')
    },
    backStep () {
      this.$store.dispatch('wizardBack')
    }
  }
}
</script>
