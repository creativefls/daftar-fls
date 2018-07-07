<template>
  <div>
    <v-layout justify-center>
      <v-flex md8>
        <v-card>
          <v-card-title class="title">Riwayat form</v-card-title>
          <v-card-text>
            <v-list>
              <template v-for="(item, index) in historyRegistrars">
                <v-list-tile
                  :key="item.title"
                  avatar
                  @click="openErrorMessage(item.error)"
                  ripple>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.fullName }}</v-list-tile-title>
                    <v-list-tile-sub-title class="primary--text">{{ item.room1 }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ item.createdAt | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</v-list-tile-sub-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-list-tile-action-text v-if="item.error" class="error--text">error</v-list-tile-action-text>
                    <v-icon v-if="item.error" left color="error">error</v-icon>
                  </v-list-tile-action>

                </v-list-tile>
                <v-divider
                  v-if="index + 1 < historyRegistrars.length"
                  :key="index"
                ></v-divider>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" width="80%">
      <v-card>
        <v-card-title class="pb-0">
          <div class="subheading">error message</div>
          <v-spacer></v-spacer>
          <v-btn icon flat @click="dialog = !dialog">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <code style="overflow: scroll;">
            <v-btn icon flat @click="copyErrorMessage()">
              <v-icon small>content_copy</v-icon>
            </v-btn>
            <div id="url_field">
{{ selectedError }}
            </div>
          </code>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import swal from 'sweetalert2'

export default {
  data () {
    return {
      historyRegistrars: [],
      selectedError: null,
      dialog: false
    }
  },
  methods: {
    getHistory () {
      if (typeof localStorage == 'undefined') {
        swal(
          'Error',
          'Browser yang kamu gunakan tidak mendukung fitur ini',
          'error'
        )
        return
      }
      let registrar = localStorage.getItem('registrar')
      this.historyRegistrars = JSON.parse(registrar)
    },
    openErrorMessage (error) {
      if (!error) return
      this.selectedError = error
      this.dialog = true
    },
    copyErrorMessage () {
      var urlField = document.querySelector('#url_field');

      // create a Range object
      var range = document.createRange();
      // set the Node to select the "range"
      range.selectNode(urlField);
      // add the Range to the set of window selections
      window.getSelection().addRange(range);

      // execute 'copy', can't 'cut' in this case
      document.execCommand('copy');
    }
  },
  mounted () {
    this.getHistory()
  }

}
</script>
