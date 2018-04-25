<template>
  <v-layout justify-center>
    <v-flex md8>
      <v-card>
        <v-stepper v-model="step">
          <v-stepper-header class="elevation-0">
            <v-stepper-step step="1" :complete="step > 1">Name of step 1</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2" :complete="step > 2">Name of step 2</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Name of step 3</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <step-one ref="step1"></step-one>
            </v-stepper-content>
            <v-stepper-content step="2">
              <step-two ref="step2"></step-two>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            </v-stepper-content>
            <wizard-actions class="pb-4 px-4"
              :step="step"
              :max-step="stepMax"
              @next-step="nextStep()"
              @back-step="backStep()"
              @finish="submit()"
            ></wizard-actions>
          </v-stepper-items>
        </v-stepper>

      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
import WizardActions from '@/components/daftar/WizardActions'
import StepOne from '@/components/daftar/step-1'
import StepTwo from '@/components/daftar/step-2'

export default {
  // provide: function () {
  //   return {
  //     $validator: this.$validator
  //   }
  // },
  data () {
    return {
      finalModel: {},
      step: 1,
      stepMax: 3
    }
  },
  methods: {
    validateStep(name) {
      this.$refs[name].validate().then((result) => {
        console.log('name', typeof name, result)
        if (!result) {
          alert('Terdapat kesalahan di inputan')
        } else {
          alert('OK lanjut')
            this.step = this.step + 1
        }
      })
      // if (this.$refs[name].validate()) {
      //   alert('oj', typeof name)
      // } else {
      //   alert('cul')
      // }
    },
    nextStep () {
      // let stepan = eval('step' + this.step)
      // if (this.$refs['step2'].validate()) {
      //   this.step = this.step + 1
      // } else {
      //   alert('lah elol')
      // }
      this.validateStep('step' + this.step)
    },
    backStep () {
      this.step = this.step - 1
    },
    submit () {
      alert('SUBMIT CUY !!')
    }
  },
  components: { WizardActions, StepTwo, StepOne }
}
</script>
