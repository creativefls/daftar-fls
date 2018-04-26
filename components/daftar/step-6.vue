<template>
  <div>
    <div class="subheading primary__dark--text">Apa motivasi kamu mengikuti FLS 2018?</div>
    <v-text-field
      v-model="model.essayMotivationJoin"
      data-vv-as="Pertanyaan"
      :error-messages="errors.collect('motivationJoin')"
      multi-line
      counter="300"
      v-validate="'required'"
      data-vv-name="motivationJoin"
      class="pa-0"
    ></v-text-field>

    <div class="subheading primary__dark--text mt-4">Mengapa kamu memilih room tersebut?</div>
    <v-text-field
      v-model="model.essayRoomSelected"
      data-vv-as="Pertanyaan"
      :error-messages="errors.collect('roomSelected')"
      multi-line
      counter="300"
      v-validate="'required'"
      data-vv-name="roomSelected"
      class="pa-0"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        essayMotivationJoin: '',
        essayRoomSelected: ''
      }
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
