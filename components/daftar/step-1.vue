<template>
  <v-radio-group v-model="model.room1"
    name="room1"
    data-vv-as="Room Pilihan"
    :error-messages="errors.collect('room1')"
    v-validate="'required'"
    column>
    <template v-for="(room, index) in roomLists">
      <v-radio
        :label="room.name"
        :color="room.color"
        :value="room.name"
        :key="index"
      ></v-radio>
    </template>
  </v-radio-group>
</template>

<script>

export default {
  data () {
    return {
      model: {
        room1: null
      },
      roomLists: [
        { name: 'Human Capital', color: 'primary' },
        { name: 'Education', color: 'secondary' },
        { name: 'Digital', color: 'success' },
        { name: 'Urban Planning', color: 'info' },
        { name: 'Entrepreneurship', color: 'warning' },
        { name: 'Poverty', color: 'error' },
      ]
    }
  },
  methods: {
    validate () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll().then((valid) => {
          let errors = this.errors.collect()
          resolve({ valid: valid, model: this.model, error: errors[Object.keys(errors)[0]]});
        });
      })
    }
  }
}
</script>
