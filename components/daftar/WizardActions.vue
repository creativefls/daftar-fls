<template>
  <v-layout>
    <v-flex class="px-1">
      <v-btn v-if="step > 1" @click.stop="backStep()" round block color="primary" outline>Kembali</v-btn>
    </v-flex>
    <v-flex class="px-1">
      <v-btn v-if="step < maxStep" @click.stop="nextStep()" round block color="primary" depressed>Lanjut</v-btn>
      <v-btn v-else @click.stop="finishStep()" round color="primary" depressed>Kirim <v-icon right dark>cloud_upload</v-icon></v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['step', 'maxStep'],
  methods: {
    nextStep () {
      if (this.step < this.maxStep) this.$emit('next-step')
    },
    backStep () {
      if (this.step > 1) this.$emit('back-step')
    },
    finishStep() {
      this.$emit('finish')
    }
  }
}
</script>
