<template>
  <v-card-title>
    <div>
      <h3 class="headline mb-0">Daftar FLS 2018</h3>
      <div>{{ step }}/7</div>
    </div>
  </v-card-title>
</template>

<script>
export default {
  computed: {
    step () {
      return this.$store.getters.wizardStep
    }
  }
}
</script>
