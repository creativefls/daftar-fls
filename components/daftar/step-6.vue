<template>
  <v-layout justify-center>
    <v-flex md8>
      <v-card>
        <wizard-header></wizard-header>
        <v-card-text>
          <v-text-field
            name="input-1"
            label="Label Text"
            id="testing"
          ></v-text-field>
        </v-card-text>
        <wizard-actions/>
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
import WizardHeader from '@/components/WizardHeader'
import WizardActions from '@/components/WizardActions'

export default {

  components: { WizardHeader, WizardActions }
}
</script>
