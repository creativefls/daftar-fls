<template>
  <nuxt-child></nuxt-child>
</template>

<script>
export default {
  middleware: ['registerWizard'],
  created () {
    this.$router.push('/daftar/step-1')
  }
}
</script>
