<template>
  <div>
    <small></small>
    <v-card v-for="(achievement, index) in model.achievements" :key="index" class="fls-form-group elevation-3 my-2">
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn v-if="model.achievements.length > 1" color="error" small icon @click="removeFormAchievement(index)"><v-icon small>delete</v-icon></v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="achievement.name"
          label="Prestasi"
          data-vv-as="Prestasi"
          :error-messages="errors.collect('name' + index)"
          v-validate="''"
          :data-vv-name="'name' + index"
          required
        ></v-text-field>
        <v-select
          :items="levelItems"
          v-model="achievement.level"
          data-vv-as="Tingkat"
          :error-messages="errors.collect('level' + index)"
          v-validate="''"
          :data-vv-name="'level' + index"
          label="Tingkat"
        ></v-select>
        <v-select
          :items="rankItems"
          v-model="achievement.rank"
          data-vv-as="Peringkat"
          :error-messages="errors.collect('rank' + index)"
          v-validate="''"
          :data-vv-name="'rank' + index"
          label="Peringkat"
        ></v-select>
        <v-select
          :items="yearItems"
          v-model="achievement.year"
          label="Tahun"
          data-vv-as="Tahun"
          :error-messages="errors.collect('year' + index)"
          v-validate="''"
          :data-vv-name="'year' + index"
          required
        ></v-select>
      </v-card-text>

    </v-card>
    <v-btn v-if="this.model.achievements.length < 5" block @click="newFormAchievement()" color="info">Tambah</v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        achievements: [{
          name: '',
          year: '',
          level: '',
          rank: ''
        }]
      },
      rankItems: [
        'Juara 1',
        'Juara 2',
        'Juara 3',
        'Peserta',
      ],
      levelItems: [
        'Internasional',
        'Nasional',
        'Daerah',
        'Universitas',
        'Sekolah'
      ],
      yearItems: [
        2018,
        2017,
        2016,
        2015,
        2014,
        2013
      ]
    }
  },
  methods: {
    newFormAchievement () {
      if (this.model.achievements.length < 5) {
        this.model.achievements.push({
          name: '',
          year: '',
          level: '',
          rank: ''
        })
      }
    },
    removeFormAchievement (index) {
      if (this.model.achievements.length > 1) this.model.achievements.splice(index, 1)
    },
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
