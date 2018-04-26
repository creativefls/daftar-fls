<template>
  <div>
    <small></small>
    <v-card v-for="(organization, index) in model.organizations" :key="index" class="fls-form-group elevation-3 my-2">
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn v-if="model.organizations.length > 1" color="error" small icon @click="removeFormOrganization(index)"><v-icon small>delete</v-icon></v-btn>
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
          v-validate="''"
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
    <v-btn v-if="this.model.organizations.length < 5" block @click="newFormOrganization()" color="info">Tambah</v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        organizations: [{
          name: '',
          period: '',
          level: '',
          position: ''
        }]
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
        'Staff',
        'Anggota'
      ],
      levelItems: [
        'Internasional',
        'Nasional',
        'Universitas'
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
      if (this.model.organizations.length > 1) this.model.organizations.splice(index, 1)
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
