<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">Tata cara: </v-card-title>
        <v-card-text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque facilis accusantium possimus sit minima
          </p>
          <p>
            exercitationem earum fugiat ab molestiae temporibus omnis ex sed, magnam, ratione aspernatur. Ratione, doloribus culpa?
          </p>
          <hr class="my-3">
          <p>Grab the Chance, Take the Charge</p>
          <div class="text-xs-left">
            <em><small>&mdash; John Leider</small></em>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" round nuxt to="/daftar">Daftar</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
