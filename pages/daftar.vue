<template>
  <v-layout justify-center>
    <v-flex md8>
      <v-card>
        <wizard-header></wizard-header>
        <v-card-text>
          <nuxt-child></nuxt-child>
        </v-card-text>
       <v-card-actions>
        <v-btn v-if="$store.state.wizardStep > 1" @click="backStep()" round color="primary" outline>Back</v-btn>
        <v-btn v-if="$store.state.wizardStep < $store.state.wizardMax" @click="nextStep()" round color="primary" depressed>Next</v-btn>
        <v-btn v-else round color="primary" depressed>Submit</v-btn>
      </v-card-actions>
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
import WizardHeader from '@/components/WizardHeader'
import WizardActions from '@/components/WizardActions'

export default {
   methods: {
    nextStep () {
      this.$store.dispatch('wizardNext')
    },
    backStep () {
      this.$store.dispatch('wizardBack')
    }
  },
  components: { WizardHeader, WizardActions }
}
</script>
