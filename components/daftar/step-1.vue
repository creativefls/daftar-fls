<template>
  <v-layout justify-center>
    <v-flex md8>
      <v-card>
        <v-card-text>
          <v-text-field
            name="input-1"
            label="Label Text"
            id="testing"
          ></v-text-field>
        </v-card-text>
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>

export default {
  methods: {
    validate () {
      return false
    }
  }
}
</script>
