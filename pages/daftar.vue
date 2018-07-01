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
              :loadingFinish="loadingSubmit"
              :loadingStep="loadingStep"
              @next-step="nextStep()"
              @back-step="backStep()"
              @finish="finishStep()"
            ></wizard-actions>
          </v-stepper-items>

        </v-stepper>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import swal from 'sweetalert2'

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
      stepMax: 6,
      loadingSubmit: false,
      loadingStep: false,
      hasError: false
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
        case 6: return 'Pertanyaan'
      }
    }
  },
  watch: {
    formModel () {
      if (this.formModel.room1) {
        this.$store.commit('roomSelected', this.formModel.room1)
      }
    }
  },
  methods: {
    setHistory (dataModel) {
      let storageData = localStorage.getItem('registrar')
      console.log('storag data',storageData, typeof storageData);

      let registrarData = []

      if (JSON.parse(JSON.stringify(storageData))) {
        registrarData = JSON.parse(storageData)
      }
      console.log('ini registrar data',registrarData);

      registrarData = [ ...registrarData, dataModel ]
      localStorage.setItem('registrar', JSON.stringify(registrarData))
    },
    submitData () {
      this.loadingSubmit = true
      let self = this

      this.$axios.post('http://128.199.72.101:3000/api/registrars', {
        roomFirst: this.formModel.room1,
        roomSecond: this.formModel.room1,
        fullname: this.formModel.fullName,
        nickname: this.formModel.nickName,
        placeOfBirth: this.formModel.placeOfBirth,
        dateOfBirth: this.formModel.dateOfBirth,
        gender: this.formModel.gender,
        domicileAddress: this.formModel.domicileAddress,
        province: this.formModel.province.name,
        achievements: this.formModel.achievements,
        city: this.formModel.regency,
        institution: this.formModel.institution,
        phone: this.formModel.phone,
        email: this.formModel.email,
        socmed: this.formModel.socmed,
        organizations: this.formModel.organizations,
        socialActivities: this.formModel.socialActivities,
        essayMotivationJoin: this.formModel.essayMotivationJoin,
        essayRoomSelected: this.formModel.essayRoomSelected,
        essayCaseStudy: this.formModel.essayCaseStudy
      }).then(response => {
        console.log('submit ', response.data);
        this.setHistory(this.formModel)
        this.loadingSubmit = false
        swal({
          title: 'Terima kasih, ' + self.formModel.nickName,
          html: 'Kamu telah terdaftar dengan email <b>' + self.formModel.email + '</b>. Ingat selalu email ini, karena pengumuman hasil seleksi akan menggunakan email tersebut. Untuk info lebih lanjut pantau sosial media FLS 2018',
          type: 'success',
          allowOutsideClick: false,
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.value) {
            window.location.href = 'http://futureleadersummit.org/pesan?' +
                                    'fullName=' + this.formModel.fullName +
                                    '&nickName=' + this.formModel.nickName +
                                    '&topic=' + 'pendaftaran 2018' +
                                    '&email=' + this.formModel.email +
                                    '&customTitle=' + 'Mohon berikan tanggapan, kritik atau saran mengenai pendaftaran ini'
          }
        })
      }).catch(error => {
        this.hasError = true
        let data = { ...this.formModel, error: true }
        this.setHistory(data)
        swal(
          'Submit Error',
          error.message,
          'error'
        )
        console.log('--- awh error ----')
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('--- error respon ----')
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('--- error request ----')
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('--- error lain ----')
          console.log('Error', error.message);
        }
        console.log('--- error konfig ----')
        console.log(error.config);
      });
    },
    validateStep(name) {
      this.loadingStep = true
      this.$refs[name].validate().then(({valid, model}) => {
        console.log('name', typeof name, valid, JSON.stringify(model))
        this.loadingStep = false
        if (valid) {
          this.formModel = { ...this.formModel, ...model };
          this.step = this.step + 1
        } else {
          swal(
            'Input Error',
            'Terdapat kesalahan di inputan',
            'error'
          )
        }
      })
    },
    validateFinish(name) {
      this.$refs[name].validate().then(({valid, model}) => {
        console.log('name', typeof name, valid, JSON.stringify(model))
        if (valid) {
          if (!this.hasError) {
            this.formModel = { ...this.formModel, ...model };
          }
          this.submitData()
          // this.setHistory(this.formModel)
        } else {
          swal(
            'Input Error',
            'Terdapat kesalahan di inputan',
            'error'
          )
        }
      })
    },
    nextStep () {
      this.validateStep('step' + this.step)
    },
    backStep () {
      this.step = this.step - 1
    },
    finishStep () {
      this.validateFinish('step' + this.step)
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
