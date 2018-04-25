<template>
  <div>
    step5
  </div>
</template>

<script>
export default {
  methods: {
    validate () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll().then((valid) => {
          resolve({ valid: valid, model: this.model });
        });
      })
    }
  }
}
</script>
