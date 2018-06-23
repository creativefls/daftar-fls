<template>
  <div>
    <div class="body-2 primary__dark--text">
      <v-icon small>help</v-icon>
      Kamu bisa menambahkan maksimal 5 organisasi
    </div>
    <v-card v-for="(organization, index) in model.organizations" :key="index" class="fls-form-group elevation-3 my-2">
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn color="error" small icon @click="removeFormOrganization(index)"><v-icon small>delete</v-icon></v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="organization.name"
          label="Nama Organisasi"
          data-vv-as="Nama Organisasi"
          :error-messages="errors.collect('name' + index)"
          v-validate="'required'"
          :data-vv-name="'name' + index"
          required
        ></v-text-field>
        <v-select
          :items="levelItems"
          v-model="organization.level"
          data-vv-as="Tingkat"
          :error-messages="errors.collect('level' + index)"
          v-validate="'required'"
          :data-vv-name="'level' + index"
          label="Tingkat"
        ></v-select>
        <v-select
          :items="positionItems"
          v-model="organization.position"
          data-vv-as="Jabatan"
          :error-messages="errors.collect('position' + index)"
          v-validate="'required'"
          :data-vv-name="'position' + index"
          label="Jabatan"
        ></v-select>
        <v-text-field
          v-model="organization.period"
          label="Periode"
          data-vv-as="Periode"
          :error-messages="errors.collect('period' + index)"
          v-validate="'required'"
          :data-vv-name="'period' + index"
          required
        ></v-text-field>
      </v-card-text>

    </v-card>
    <v-btn v-if="this.model.organizations.length < 5" block @click="newFormOrganization()" round color="info">Tambah</v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        organizations: []
      },
      positionItems: [
        'Ketua',
        'Wakil Ketua',
        'Sekretaris',
        'Bendahara',
        'Menteri',
        'Kabid',
        'Wakil Menteri',
        'Wakil Bidang',
        'Kadiv',
        'Staff Ahli',
        'Anggota/Staff'
      ],
      levelItems: [
        'Universitas',
        'Daerah',
        'Nasional',
        'Internasional',
      ]
    }
  },
  methods: {
    newFormOrganization () {
      if (this.model.organizations.length < 5) {
        this.model.organizations.push({
          name: '',
          period: '',
          level: '',
          position: ''
        })
      }
    },
    removeFormOrganization (index) {
      this.model.organizations.splice(index, 1)
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
