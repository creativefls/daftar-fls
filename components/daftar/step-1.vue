<template>
  <v-layout justify-center>
    <v-flex md8>
      <v-card>
        <v-card-text>
          <form >
            <v-text-field
              v-model="model.tes"
              label="Nama Lengkap"
              data-vv-as="Nama Lengkap"
              :error-messages="errors.collect('tes')"
              v-validate="'required'"
              data-vv-name="tes"
            ></v-text-field>
          </form>
        </v-card-text>
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>

export default {
  data () {
    return {
      model: {}
    }
  },
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
