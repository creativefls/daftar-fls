<template>
  <v-layout justify-center>
    <v-flex md8>
      <v-card class="card-wizard">
        <v-stepper v-model="step">

          <v-stepper-header class="elevation-0">
            <v-stepper-step step="1" :complete="step > 1"></v-stepper-step>
            <v-divider :class="{complete: step > 1}"></v-divider>
            <v-stepper-step step="2" :complete="step > 2"></v-stepper-step>
            <v-divider :class="{complete: step > 2}"></v-divider>
            <v-stepper-step step="3" :complete="step > 3"></v-stepper-step>
            <v-divider :class="{complete: step > 3}"></v-divider>
            <v-stepper-step step="4" :complete="step > 4"></v-stepper-step>
            <v-divider :class="{complete: step > 4}"></v-divider>
            <v-stepper-step step="5" :complete="step > 5"></v-stepper-step>
            <v-divider :class="{complete: step > 5}"></v-divider>
            <v-stepper-step step="6" :complete="step > 6"></v-stepper-step>
          </v-stepper-header>

          <h2 class="headline text-xs-center primary__dark--text">
            {{ stepTitle }}
          </h2>

          <v-stepper-items>
            <v-stepper-content step="1">
              <step-one ref="step1"></step-one>
            </v-stepper-content>
            <v-stepper-content step="2">
              <step-two ref="step2"></step-two>
            </v-stepper-content>
            <v-stepper-content step="3">
              <step-three ref="step3"></step-three>
            </v-stepper-content>
            <v-stepper-content step="4">
              <step-four ref="step4"></step-four>
            </v-stepper-content>
            <v-stepper-content step="5">
              <step-five ref="step5"></step-five>
            </v-stepper-content>
            <v-stepper-content step="6">
              <step-six ref="step6"></step-six>
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
import StepThree from '@/components/daftar/step-3'
import StepFour from '@/components/daftar/step-4'
import StepFive from '@/components/daftar/step-5'
import StepSix from '@/components/daftar/step-6'

export default {
  data () {
    return {
      formModel: {},
      step: 1,
      stepMax: 6
    }
  },
  computed: {
    stepTitle () {
      switch (this.step) {
        case 1: return 'Pilihan Room'
        case 2: return 'Identitas Pribadi'
        case 3: return 'Organisasi'
        case 4: return 'Prestasi'
        case 5: return 'Aktifitas Sosial'
        case 6: return 'Essay'
      }
    }
  },
  methods: {
    validateStep(name) {
      this.$refs[name].validate().then(({valid, model}) => {
        console.log('name', typeof name, valid, JSON.stringify(model))
        if (valid) {
          this.formModel = { ...this.formModel, ...model };
          this.step = this.step + 1
        } else {
          alert('Terdapat kesalahan di inputan')
        }
      })
    },
    nextStep () {
      this.validateStep('step' + this.step)
    },
    backStep () {
      this.step = this.step - 1
    },
    submit () {
      alert('SUBMIT CUY !!')
    }
  },
  components: { WizardActions, StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix }
}
</script>

<style lang="stylus">
.theme--light .stepper .stepper__header
  .divider
    &.complete
      border: 0;
      height: 2px;
      background: #8E44AD;
      background-image: -webkit-linear-gradient(left, #b357db, #8E44AD, #b357db);
      background-image: -moz-linear-gradient(left, #b357db, #8E44AD, #b357db);
      background-image: -ms-linear-gradient(left, #b357db, #8E44AD, #b357db);
      background-image: -o-linear-gradient(left, #b357db, #8E44AD, #b357db);
</style>
